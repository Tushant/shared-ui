import React from "react";

export const css = (styles) => {
  return Object.entries(styles).reduce((acc, [key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    return `${acc}${cssKey}:${value};`;
  }, "");
};

// Helper to create styled component
export const styled = (Component) => {
  return (args) => {
    console.log("args", args);
    console.log("styles", styles);
    const className = `styled-${Math.random().toString(36).substr(2, 9)}`;
    const styleString =
      typeof styles === "function" ? styles(props) : styles || {};
    console.log("styleString", styleString);

    const StyledComponent = (componentProps) => {
      React.useLayoutEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = `.${className} { ${css(styleString)} }`;
        document.head.appendChild(styleElement);
        return () => document.head.removeChild(styleElement);
      }, [styleString]);

      return (
        <Component
          className={`${className} ${componentProps.className || ""}`}
          {...componentProps}
        />
      );
    };

    return StyledComponent;
  };
};

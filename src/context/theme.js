import React from "react";

import { theme } from "../theme";

export const createThemeContext = (defaultTheme) => {
  const ThemeContext = React.createContext(defaultTheme);

  const ThemeProvider = ({ theme, children }) => (
    <ThemeContext.Provider value={theme || defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );

  const useTheme = () => React.useContext(ThemeContext);

  return { ThemeProvider, useTheme };
};

export const { ThemeProvider, useTheme } = createThemeContext(theme);

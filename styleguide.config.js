const path = require("path");

module.exports = {
  title: "connyct/shared-ui",
  sections: [
  {
  name: 'UI components',
  components: "src/components/**/*.jsx",
  usageMode: "expand",
  exampleMode: "expand",
  }
  ],
  context: {
    theme: path.join(__dirname, "src/context/theme.js"), // Provide Theme context to components
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/context/ThemeProviderWrapper.js"), // Wrapper for ThemeProvider
  },
  theme: {
    color: {
      link: "#22222",
      linkHover: "#0d84d9",
    },
  },
  styles: {
    Playground: {
      preview: {
        padding: 0,
        border: "none",
      },
    },
  },
  moduleAliases: {
    components: path.resolve(__dirname, "src/components"),
    context: path.resolve(__dirname, "src/context"),
    utils: path.resolve(__dirname, "src/utils"),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(js|jsx)$/, // Match both .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react", // To handle JSX syntax
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
  },
  require: [path.join(__dirname, "./dist/styles.css")],
};

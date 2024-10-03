import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
const tailwindConfig = require("./tailwind.config.js");

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      plugins: [tailwindcss(tailwindConfig), autoprefixer],
      //extract: "styles.css",
      extract: true,
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    resolve(),
    terser(),
  ],
  external: ["react", "react-dom"],
};

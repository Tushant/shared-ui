import React from "react";
import { ThemeProvider } from "./theme";

import "../../src/tailwind.css";

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default ThemeProviderWrapper;

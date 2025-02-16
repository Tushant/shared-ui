/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#f8de7e",
        },
        accent: "#222222",
        accentHover: "#727169",
        accentActive: "#222222",
        accentDisabled: "#DFDACE",
        danger: "#F56565",
        dangerHover: "#C53030",
        neutral: "#E2E8F0",
        neutralHover: "#CBD5E0",
        active: "#F0F0F0",
        red: {
          core: "#F4482A",
          shade1: "#D73417",
          shade2: "#A12C17",
          shade3: "#6B1C0F",
          shade4: "#43110A",
          tint1: "#F4482A",
          tint2: "#FAB0A3",
          tint3: "#FBCEC6",
          tint4: "#FEECE9",
        },
        yellow: {
          tint2: "#FFD980",
        },
        surface: {
          alwaysFullBlack: "#000000",
          primary: "#FFFFFF",
          primarySurface: "#FFFFFF",
          secondary: "#FAFAFA",
          tertiary: "#F4F4F4",
          danger: "#FFF3F1",
          info: "#F3F8FC",
          warning: "#FFF1D1",
          success: "#F4FAF1",
          inverse: "#222222",
          accentTint: "#EDFAF6",
          accentShade: "#00342B",
          promotion: "#FFF1D1",
          overlayDark: "rgba(0, 0, 0, 0.6)",
          overlayLight: "rgba(0, 0, 0, 0.4)",
          overlayWhite: "rgba(255, 255, 255, 0.6)",
          hover: "#FAFAFA",
          active: "#F0F0F0",
          disabled: "#F4F4F4",
        },
        content: {
          primary: "#222222",
          secondary: "#666666",
          tertiary: "#888888",
          deemphasized: "#ABABAB",
          danger: "#C84633",
          info: "#0066C3",
          warning: "#FFBE28",
          success: "#4DBC15",
          inverse: "#FFFFFF",
          muted: "#ABABAB",
          hover: "#222222",
          active: "#222222",
          disabled: "#ABABAB",
          alwaysWhite: "#FFFFFF",
          alwaysBlack: "#222222",
        },
        line: {
          primary: "#CCCCCC",
          secondary: "#E6E6E6",
          tertiary: "#F0F0F0",
          danger: "#FA644B",
          info: "#0066C3",
          warning: "#FFBE28",
          success: "#4DBC15",
          inverse: "none",
          lineDivider: "#E6E6E6",
          separator: "#F4F4F4",
          hover: "#888888",
          active: "#00342B",
          disabled: "#CCCCCC",
          alwaysWhite: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

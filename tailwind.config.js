const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.js"],
  darkMode: 'media',
  theme: {
    colors: {
      // Build your palette here
      black: colors.black,
      coolGray: colors.coolGray,
      transparent: "transparent",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      white: colors.white,
      violet: colors.violet,
      green: colors.green,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      emerald: colors.emerald,
      "app-background": "var(--app-background)",
      "app-background-light": "var(--app-background-light)",
      "app-background-plain": "var(--plain-background)",
      "background-color": "var(--background-color)",
      "primary-color": "var(--primary-color)",
      "primary-dark": "var(--primary-dark)",
      "primary-medium": "var(--primary-medium)",
      "secondary-dark": "var(--secondary-dark)",
      "secondary-medium": "var(--secondary-medium)",
      "secondary-light": "var(--secondary-light)",
    },
    textColor: {
      gray: colors.trueGray,
      green: colors.green,
      red: colors.red,
      "primary-color-dark": "var(--primary-dark)",
      "primary-dark": "var(--primary-text-dark)",
      "primary-medium": "var(--primary-text-medium)",
      "secondary-dark": "var(--secondary-text-dark)",
      "secondary-medium": "var(--secondary-text-medium)",
      "secondary-light": "var(--secondary-text-light)",
      plain: "var(--plain-color)",
    },
    borderColor: {
      "plain-contrast": "var(--plain-color)",
      "plain-contrast-light": "var(--app-background-light)",
      "plain-contrast-medium": "var(--primary-text-light)",
      "background-color": "var(--app-background)",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

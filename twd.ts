import { Config } from "https://deno.land/x/twd@v0.4.8/types.ts";
import * as colors from "https://deno.land/x/twd@v0.4.8/colors.ts";

export const config: Config = {
  preflight: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // Build your palette here
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      green: colors.green,
      yellow: colors.amber,
      white: colors.white,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: {},
};

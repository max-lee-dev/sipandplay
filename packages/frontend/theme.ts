import { extendTheme } from "@chakra-ui/react";
import "@fontsource/arvo";
import "@fontsource-variable/rubik";

export default extendTheme({
  initialColorMode: "light",

  fonts: {
    heading: "Arvo",
    body: "Rubik Variable",
  },

  colors: {
    lol: {
      100: "#f8fff2",
      200: "#f3f5f8",
      300: "#d6ffae",
      400: "#c2ff86",
      500: "#519f00",
      600: "#96cc60",
      700: "#83b354",
      800: "#384c24",
      900: "#13190c",
    },
    neutral: {
      100: "#ffffff",
      200: "#f3f5f8",
      300: "#eaeaea",
      400: "#a1a39e",
      500: "#5a5e55",
      600: "#42473d",
      700: "#13190c",
      800: "#11170b",
      900: "#020201",
    },
    brand: {
      100: "#f4f8f1",
      200: "#dfead5",
      300: "#c9dcb9",
      400: "#b3ce9c",
      500: "#93b972",
      600: "#76945b",
      700: "#586f44",
      800: "#2c3722",
      900: "#0f120b",
    },
  },
});

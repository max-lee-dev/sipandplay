import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  initialColorMode: "light",

  colors: {
    brand: {
      100: "#f8fff2",
      200: "#f3f5f8",
      300: "#d6ffae",
      400: "#c2ff86",
      500: "#bbff78",
      600: "#96cc60",
      700: "#83b354",
      800: "#384c24",
      900: "#13190c",
    },
    neutral: {
      100: "#ffffff",
      200: "#f3f5f8",
      300: "#d0d1ce",
      400: "#a1a39e",
      500: "#5a5e55",
      600: "#42473d",
      700: "#13190c",
      800: "#11170b",
      900: "#020201",
    },
  },
});

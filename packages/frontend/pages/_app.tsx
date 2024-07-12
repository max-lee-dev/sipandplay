import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import theme from "../theme";
import "../styles.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Box bg={"neutral.200"} minH={["130vh", "130vh"]}>
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

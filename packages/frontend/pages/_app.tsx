import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import type { AppProps } from "next/app";
import theme from "../theme";

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

import type { NextPage } from "next";
import { Box, Heading, HStack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <HStack width={"100%"}>
        <Box bg={"neutral.100"}>
          <Heading width={"100%"}>Welcome</Heading>
        </Box>
        <Box>hia</Box>
      </HStack>
    </PageLayout>
  );
};

export default Home;

import type { NextPage } from "next";
import { Box, Heading, HStack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <HStack width={"100%"}>
        <Heading width={"100%"}>geese</Heading>
        <Box>hi</Box>
      </HStack>
    </PageLayout>
  );
};

export default Home;

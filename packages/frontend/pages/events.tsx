import type { NextPage } from "next";
import { Stack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import Calendar from "../components/Calendar/Calendar";

const Events: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Stack
        alignItems={"center"}
        direction={["column", "row"]}
        px={[0, 10]}
        pt={20}
      >
        <Calendar />
      </Stack>
    </PageLayout>
  );
};

export default Events;

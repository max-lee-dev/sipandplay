import React, { useState } from "react";
import type { NextPage } from "next";
import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import Calendar from "../components/Calendar/Calendar";
import Log from "../components/Log/Log";

const Events: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(12);

  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box px={4}>
        <Box pl={2} bg={"neutral.100"} p={5}>
          <Heading pt={5} fontSize={["xl", "3xl"]}>
            Events
          </Heading>

          <Divider borderWidth={2} borderColor={"brand.500"} width={"5%"} />
        </Box>

        <Stack
          pt={6}
          direction={["column", "row"]}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          <Log selectedDay={selectedDay} />
        </Stack>
      </Box>
    </PageLayout>
  );
};

export default Events;

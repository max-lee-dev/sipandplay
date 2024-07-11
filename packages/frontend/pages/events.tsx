import React, { useState } from "react";
import type { NextPage } from "next";
import { Divider, Heading, Stack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import Calendar from "../components/Calendar/Calendar";
import Log from "../components/Log/Log";

const Events: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(12);

  return (
    <PageLayout title={"geese, by minihacks"}>
      <Heading pt={5} fontSize={["xl", "3xl"]}>
        Events
      </Heading>

      <Divider borderWidth={3} borderColor={"brand.500"} width={"5%"} />

      <Stack
        pt={6}
        alignItems={"center"}
        direction={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <Log selectedDay={selectedDay} />
      </Stack>
    </PageLayout>
  );
};

export default Events;

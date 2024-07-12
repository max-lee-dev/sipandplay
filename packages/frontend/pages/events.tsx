import React, { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import Calendar from "../components/Calendar/Calendar";
import Log from "../components/Log/Log";

const Events: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(12);

  return (
    <PageLayout>
      <Head>
        <title>Events - Sip & Play NYC</title>
        <meta
          name={"description"}
          content={
            "Find upcoming events at Sip & Play in Brooklyn, NY. Enjoy board games, bubble tea, coffee, beer, and delicious sandwiches or salads. Reserve your table for $15 per person. Perfect for parties of all sizes, with special accommodations for groups of 9 or more. Visit us at 471 5th Ave., Brooklyn, and experience fun-filled moments with friends and family. Open Monday to Thursday from 11am to 11pm, Friday from 11am to midnight, Saturday from 10am to midnight, and Sunday from 10am to 11pm."
          }
        />
        <meta
          name={"viewport"}
          content={"initial-scale=1.0, width=device-width"}
        />
        <meta name={"theme-color"} content={"#000000"} />
        <meta name={"og:title"} content={"Sip & Play NYC"} />
        <meta name={"og:image"} content={"/2021-12-12.jpg"} />
        <meta
          name={"keywords"}
          content={
            "events, games, hosting, sip, play, nyc, boardgames, bubble tea, coffee, beer, sandwiches, salads"
          }
        />
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
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

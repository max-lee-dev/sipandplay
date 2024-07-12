import type { NextPage } from "next";
import Head from "next/head";

import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import { FaClock, FaDiceD20, FaLocationArrow } from "react-icons/fa";
import PageLayout from "../components/Layout/PageLayout";
import "react-slideshow-image/dist/styles.css";

const Home: NextPage = () => {
  const divStyle = {
    height: "350px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
  };
  const slideImages = [
    {
      url: "/2021-12-12.jpg",
      caption: "Front",
    },
    {
      url: "/sipnplay2.jpg",
      caption: "Reception",
    },
    {
      url: "/sipnplay3.jpg",
      caption: "Desks",
    },
    {
      url: "/sipnplay4.jpg",
      caption: "Back",
    },
    {
      url: "/sipnplay5.jpg",
      caption: "Food",
    },
  ];
  return (
    <PageLayout>
      <Head>
        <title>Sip & Play NYC</title>
        <meta
          name={"description"}
          content={
            "Discover Sip & Play in Brooklyn, NY – your ultimate board game café with over 500+ games! Enjoy 3 hours of gameplay for just $10 per person ($12 on weekends and holidays). Indulge in bubble tea, coffee, beer, and delicious sandwiches or salads. Reserve your table for $15 per person. Perfect for parties of all sizes, with special accommodations for groups of 9 or more. Visit us at 471 5th Ave., Brooklyn, and experience fun-filled moments with friends and family. Open Monday to Thursday from 11am to 11pm, Friday from 11am to midnight, Saturday from 10am to midnight, and Sunday from 10am to 11pm."
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
            "sip, play, nyc, boardgames, bubble tea, coffee, beer, sandwiches, salads"
          }
        />
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
      <VStack>
        <Box bg={"neutral.100"} p={10} borderRadius={5} width={"100%"}>
          <Stack direction={["column", "row"]} width={"100%"}>
            <VStack
              px={[0, 16]}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              width={"100%"}
            >
              <Box
                pt={4}
                cursor={"pointer"}
                alignSelf={"flex-start"}
                width={"100%"}
                fontWeight={500}
              >
                <HStack>
                  <Heading fontSize={["5xl", "6xl"]}>Sip & Play</Heading>
                  <Box fontSize={[36, 50]}>
                    <FaDiceD20 />
                  </Box>
                </HStack>

                <Text width={["60%", "100%"]}>
                  Reservations are open for any party size!*
                </Text>
              </Box>
              <Box cursor={"pointer"}>
                <Button
                  mt={[2, 6]}
                  as={"a"}
                  href={"https://www.sipnplaynyc.com/reservations"}
                  borderColor={"brand.500"}
                  borderWidth={2}
                  px={6}
                  _hover={{
                    bg: "brand.500",
                    color: "neutral.100",
                  }}
                  variant={"outline"}
                >
                  Reserve
                </Button>
              </Box>
              <Text fontSize={"10px"}>
                *For large parties (9+ or more people), please email us at
                sipnplaynyc@gmail.com to inquire about a reservation. .
              </Text>
            </VStack>

            <Box padding={5} width={["100%", "50%"]}>
              <Slide easing={"ease"}>
                {slideImages.map((each) => (
                  <Box>
                    <div
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${each.url})`,
                      }}
                    />
                  </Box>
                ))}
              </Slide>
            </Box>
          </Stack>
        </Box>
        <Box
          bg={"neutral.100"}
          p={10}
          borderRadius={5}
          width={"100%"}
          mt={10}
          mb={10}
        >
          <Heading fontSize={["4xl", "5xl"]}>Info</Heading>
          <Divider borderWidth={2} borderColor={"brand.500"} width={"5%"} />
          <Stack spacing={[1, 36]} direction={["column", "row"]}>
            <Box width={["100%", "50%"]} pt={6}>
              <Heading fontSize={["xl", "2xl"]}>How it works</Heading>
              <Text>
                Come on in with your friends and family and play boardgames from
                our collection of over 500+ games! Just $10 a person for 3 hours
                of gameplay. ($12 a person Friday-Sunday and Holidays) Play
                while enjoying bubble tea, coffee, beer sandwiches or salads and
                have a great time! If you want to guarantee a table, you can
                make a reservation which is $15 a person for 3 hours of
                gameplay.
              </Text>
            </Box>
            <Box width={["100%", "50%"]} pt={6}>
              <Heading fontSize={["xl", "2xl"]}>Location & Hours</Heading>
              <Stack
                pt={[0, 4]}
                direction={["column", "row"]}
                alignItems={"flex-start"}
              >
                <VStack alignItems={"flex-start"}>
                  <FaLocationArrow />
                  <Text>471 5th Ave., Brooklyn, NY 11215</Text>
                </VStack>
                <VStack alignItems={"flex-start"}>
                  <FaClock />
                  <Text>Monday - Thursday: 11am - 11pm</Text>
                  <Text>Friday: 11am - midnight</Text>
                  <Text>Saturday: 10pm - midnight</Text>
                  <Text>Sunday: 10am - 11pm</Text>
                </VStack>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          backgroundSize={"100% auto"}
          backgroundPosition={"center"}
          opacity={[0.35, 1, 0.5]}
          h={"40vh"}
          borderColor={"transparent"}
          width={"100%"}
          backgroundImage={"/2021-12-12.jpg"}
        />
      </VStack>
    </PageLayout>
  );
};

export default Home;

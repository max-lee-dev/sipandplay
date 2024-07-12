import type { NextPage } from "next";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import { FaDiceD20 } from "react-icons/fa";
import PageLayout from "../components/Layout/PageLayout";
import "react-slideshow-image/dist/styles.css";

const Home: NextPage = () => {
  const divStyle = {
    height: "250px",
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
    <PageLayout title={"geese, by minihacks"}>
      <VStack>
        <Box bg={"neutral.100"} p={10} borderRadius={5} width={"100%"}>
          <Stack direction={["column", "row"]} width={"100%"}>
            <VStack
              px={[0, 16]}
              justifyContent={"flex-start"}
              alignContent={"flex-start"}
              alignItems={"flex-start"}
              width={"100%"}
            >
              <Box
                pt={4}
                alignItems={"flex-start"}
                alignSelf={"flex-start"}
                width={"100%"}
                fontWeight={500}
                as={"a"}
                href={"/"}
              >
                <HStack>
                  <Heading fontSize={["5xl", "6xl"]}> Sip & Play</Heading>
                  <Box fontSize={[36, 50]}>
                    <FaDiceD20 />
                  </Box>
                </HStack>

                <Text width={["60%", "100%"]}>
                  Reservations are open for any party size!
                </Text>
              </Box>
              <Box cursor={"pointer"}>
                <Button
                  as={"a"}
                  href={"https://www.sipnplaynyc.com/reservations"}
                  borderColor={"brand.500"}
                  borderWidth={2}
                  _hover={{
                    bg: "brand.500",
                    color: "neutral.100",
                  }}
                  variant={"outline"}
                >
                  Reserve
                </Button>
              </Box>
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

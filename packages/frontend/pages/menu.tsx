import type { NextPage } from "next";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NoSsr from "../components/no-ssr";
import PageLayout from "../components/Layout/PageLayout";
import ActualCoffeeModel from "../components/ActualCoffeeModel";
import CoffeeModel from "../components/CoffeeModel";

const CoffeeMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={["100%", "100%"]}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Box>
        <ActualCoffeeModel />

        <HStack>
          <Heading fontWeight={700} fontSize={"2xl"}>
            Coffee
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Latte
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $4.75(H)/$5.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Cappucino
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $4.50(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Americano
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $3.75(H)/$4.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Cortado
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $4.25(H)/$4.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Red Eye
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $4.50(H)/$4.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Cafe Au Lait
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $3.25(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Mocha
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Cortado
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $4.25(H)/$4.75(C)
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box
        id={"realCoffee"}
        alignSelf={"flex-start"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
        pl={"80px"}
        color={"transparent"}
        width={["100%", "0px"]}
        minWidth={"200px"}
      >
        .
      </Box>
    </Box>
  );
};

const SpecialtyMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={["50%", "100%"]}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <CoffeeModel />

      <Box>
        <HStack>
          <Heading fontWeight={700} fontSize={"2xl"}>
            Specialty
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Matcha Latte
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.25(H)/$5.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Rose Latte
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Chai
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.00(H)/$5.50(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Hot Chocolate
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $4.50(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Lavendar Latte
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Brown Sugar Latte
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Chai
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $5.00(H)/$5.50(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={"md"} fontWeight={600}>
              Dirty Chai
            </Heading>
            <Text fontSize={"md"} fontWeight={400}>
              $6.25(H)/$6.75(C)
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box
        id={"coffee"}
        alignSelf={"flex-start"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
        pl={"80px"}
        color={"transparent"}
        width={["100%", "0px"]}
        minWidth={"200px"}
      >
        .
      </Box>
    </Box>
  );
};

const BobaMenu = (): JSX.Element => {
  return (
    <Box>
      <Box
        bg={"neutral.100"}
        height={"fit-content"}
        borderRadius={"lg"}
        p={8}
        color={"brand.900"}
      >
        <HStack>
          <Heading fontWeight={700} fontSize={"2xl"}>
            Boba
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} spacing={5} pt={6}>
          <VStack spacing={3} alignItems={"flex-start"} width={"100%"}>
            <Box>
              <Heading fontSize={"md"} fontWeight={600}>
                The OG
              </Heading>
              <Heading pt={0} fontSize={"xs"} fontWeight={400}>
                Classic milk tea
              </Heading>
            </Box>
            <VStack width={"100%"}>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"xs"} fontWeight={400}>
                  Medium
                </Text>
                <Text fontSize={"xs"} fontWeight={400}>
                  $4.75
                </Text>
              </HStack>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"xs"} fontWeight={400}>
                  Large
                </Text>
                <Text fontSize={"xs"} fontWeight={400}>
                  $5.75
                </Text>
              </HStack>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"xs"} fontWeight={400}>
                  Hot
                </Text>
                <Text fontSize={"xs"} fontWeight={400}>
                  $5.75
                </Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack spacing={3} alignItems={"flex-start"} width={"100%"}>
            <Box>
              <Heading fontSize={"md"} fontWeight={600}>
                The Fruit Black Tea
              </Heading>
              <Heading pt={0} fontSize={"xs"} fontWeight={400}>
                Comes in a variety of flavors: peach/strawerry
              </Heading>
              <Heading pt={0} fontSize={"xs"} fontWeight={400}>
                Feel free to mix and match!
              </Heading>
            </Box>
            <VStack width={"100%"}>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"xs"} fontWeight={400}>
                  Medium
                </Text>
                <Text fontSize={"xs"} fontWeight={400}>
                  $4.25
                </Text>
              </HStack>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"xs"} fontWeight={400}>
                  Large
                </Text>
                <Text fontSize={"xs"} fontWeight={400}>
                  $5.25
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
      <Box>
        <Image
          src={"/boba.png"}
          alt={"boba"}
          pt={2}
          borderRadius={20}
          width={"100%"}
        />
      </Box>
    </Box>
  );
};

const Menu: NextPage = () => {
  const document = typeof window !== "undefined" ? window.document : null;

  const flipBook = (elBook: any) => {
    elBook.style.setProperty("--c", 1); // Set current page

    elBook.querySelectorAll(".page").forEach((page: any, idx: number) => {
      page.style.setProperty("--i", idx);
      page.addEventListener("mouseup", (evt: any) => {
        if (evt.target.closest("a")) return;
        const curr = evt.target.closest(".back") ? idx : idx + 1;
        elBook.style.setProperty("--c", curr);

        if (idx === 0 && evt.target.closest(".back")) {
          elBook.classList.remove("flipped"); // Add the flipped class
        } else if (idx === 0) {
          elBook.classList.add("flipped");
        }
      });
    });
  };

  document?.querySelectorAll(".book").forEach(flipBook);

  return (
    <PageLayout>
      <NoSsr />

      <Head>
        <style>{`
          body {
            margin: 0;
            display: flex;
            min-height: 100dvh;
            perspective: 1000px;
            font: 1em/1.4 "Poppins", sans-serif;
            overflow: hidden;
            color: hsl(180 68% 5%);
            background-image: radial-gradient(circle farthest-corner at 50% 50%, hsl(187 20% 88%) 30%, hsl(149 20% 94%) 100%);
          }
        `}</style>
      </Head>
      <HStack spacing={0}>
        <Box>
          <Heading pt={5} fontSize={["xl", "3xl"]}>
            Menu
          </Heading>
          <Divider borderWidth={3} borderColor={"brand.500"} width={"50px"} />
        </Box>
      </HStack>
      <Center>
        <Box className={"book"}>
          <Box className={"page"}>
            <Box className={"front cover"}>
              <Heading as={"h1"}>Menu</Heading>
            </Box>
            <CoffeeMenu />
          </Box>
          <Box className={"page"}>
            <Box className={"front"}>
              <Image
                src={"/examplecoffee.png"}
                alt={"coffee"}
                pt={2}
                borderRadius={20}
                height={"100%"}
              />
            </Box>

            <SpecialtyMenu />
          </Box>
          <Box className={"page"}>
            <Box className={"front"}>
              <Image
                src={"/latte.png"}
                alt={"specialty"}
                pt={2}
                borderRadius={20}
                width={"100%"}
              />
            </Box>
            <Box className={"back cover"}>
              <Text>hi</Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </PageLayout>
  );
};

export default Menu;

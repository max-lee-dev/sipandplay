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
import BobaModel from "../components/BobaModel";

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
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Coffee
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Latte
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.75(H)/$5.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Cappucino
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.50(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Americano
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $3.75(H)/$4.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Cortado
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.25(H)/$4.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Red Eye
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.50(H)/$4.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Cafe Au Lait
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $3.25(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Mocha
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Cortado
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
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
      <ActualCoffeeModel />
    </Box>
  );
};

const SpecialtyMenu = (): JSX.Element => {
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
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Specialty
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Matcha Latte
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.25(H)/$5.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Rose Latte
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Chai
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.00(H)/$5.50(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Hot Chocolate
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.50(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Lavendar Latte
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Brown Sugar Latte
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Chai
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.00(H)/$5.50(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Dirty Chai
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
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
      <CoffeeModel />
    </Box>
  );
};

const BobaMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Box>
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Boba
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} spacing={5} pt={6}>
          <VStack spacing={3} alignItems={"flex-start"} width={"100%"}>
            <Box>
              <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
                The OG
              </Heading>
              <Heading pt={0} fontSize={"md"} fontWeight={400}>
                Classic milk tea
              </Heading>
            </Box>
            <VStack width={"100%"}>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"md"} fontWeight={400}>
                  Medium
                </Text>
                <Text fontSize={"md"} fontWeight={400}>
                  $4.75
                </Text>
              </HStack>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"md"} fontWeight={400}>
                  Large
                </Text>
                <Text fontSize={"md"} fontWeight={400}>
                  $5.75
                </Text>
              </HStack>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"md"} fontWeight={400}>
                  Hot
                </Text>
                <Text fontSize={"md"} fontWeight={400}>
                  $5.75
                </Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack spacing={3} alignItems={"flex-start"} width={"100%"}>
            <Box>
              <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
                The Fruit Black Tea
              </Heading>
              <Heading pt={0} fontSize={"md"} fontWeight={400}>
                Comes in a variety of flavors: peach/strawerry
              </Heading>
              <Heading pt={0} fontSize={"md"} fontWeight={400}>
                Feel free to mix and match!
              </Heading>
            </Box>
            <VStack width={"100%"}>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"md"} fontWeight={400}>
                  Medium
                </Text>
                <Text fontSize={"md"} fontWeight={400}>
                  $4.25
                </Text>
              </HStack>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text fontSize={"md"} fontWeight={400}>
                  Large
                </Text>
                <Text fontSize={"md"} fontWeight={400}>
                  $5.25
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
      <Box
        id={"boba"}
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
      <BobaModel />
    </Box>
  );
};

const HotBitesMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Box>
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Hot Bites
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Chicken Tenders
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $8.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Chicken Poppers
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $6.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Onion Rings
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Fries
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Sweet Potato Fries
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $6.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Pigs in a Blanket
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $7.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Tater Tots
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.00
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const SnacksMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Box>
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Sandwiches & Salads
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Beyond Bussin Sandwich
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $15.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Spicy Chicken Sandwich
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $13.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Italian Panini
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              TunaMelt
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Zesto Chicken Sandwich
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $13.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Turkey Club
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Mixed Green Salad
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $6.50
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Cobb Salad
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $10.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Pizza Panini
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Smoked Salmon Tartine
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Avocado Toast
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $10.00
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const SeasonalMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Box>
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Seasonal Menu
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Pina Colada
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.75(H)/$5.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Matcha Lemondae
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Yuzu-Ade
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.25
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Fresh Squeezed Lemonade
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $4.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Matcha Lavender Oat
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $6.50
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Barry Lavendar Lemondae
            </Heading>
            <Text fontSize={["3xl", "2xl"]} fontWeight={400}>
              $5.25
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const BeerMenu = (): JSX.Element => {
  return (
    <Box
      className={"back"}
      bg={"neutral.100"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Box>
        <HStack>
          <Heading fontWeight={700} fontSize={["3xl", "2xl"]}>
            Beer
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Babe Rose
            </Heading>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Archer Roose White/Red
            </Heading>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Kona Lager
            </Heading>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Blue Point
            </Heading>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Juneshine
            </Heading>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Lunar Hard Seltzers
            </Heading>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Allagash White
            </Heading>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Doc Cider
            </Heading>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Doc Cider
            </Heading>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Stella Artois
            </Heading>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Shocktop
            </Heading>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Finback
            </Heading>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["3xl", "2xl"]} fontWeight={600}>
              Three&apos;s Brewery
            </Heading>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const Menu: NextPage = () => {
  const document = typeof window !== "undefined" ? window.document : null;

  const flipBook = (elBook: any) => {
    elBook.style.setProperty("--c", 0); // Set current page

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

      <Center>
        <Box className={"book"}>
          <Box className={"page"}>
            <Box className={"front"}>
              <VStack alignItems={"flex-start"} pl={6} spacing={0}>
                <Heading pt={5} fontSize={["xl", "4xl"]}>
                  Menu
                </Heading>
                <Divider
                  borderWidth={3}
                  borderColor={"brand.500"}
                  width={"50px"}
                />
                <Center pl={10} pt={20}>
                  <Image
                    src={"/sipnplaycropped.png"}
                    width={"20px"}
                    alt={"logo"}
                  />
                </Center>
              </VStack>
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
                boxSize={"100%"}
                height={"50%"}
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
            <BobaMenu />
          </Box>
          <Box className={"page"}>
            <Box className={"front"}>
              <Image
                src={"/boba.png"}
                alt={"boba"}
                pt={2}
                borderRadius={20}
                width={"100%"}
              />
            </Box>
            <HotBitesMenu />
          </Box>
          <Box className={"page"}>
            <Box className={"front"}>
              <Image
                src={"/hotbites.png"}
                alt={"hotbites"}
                pt={2}
                borderRadius={20}
                width={"50%"}
              />
            </Box>
            <SnacksMenu />
          </Box>

          {/*<Box className={"page"}>*/}
          {/*  <Box className={"front"}>*/}
          {/*    <Image*/}
          {/*      src={"/Seasonal.png"}*/}
          {/*      alt={"seasonal"}*/}
          {/*      pt={2}*/}
          {/*      borderRadius={20}*/}
          {/*      width={"100%"}*/}
          {/*    />*/}
          {/*  </Box>*/}
          {/*  <BeerMenu />*/}
          {/*</Box>*/}
        </Box>
      </Center>
    </PageLayout>
  );
};

export default Menu;

import type { NextPage } from "next";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import NoSsr from "../components/no-ssr";
import PageLayout from "../components/Layout/PageLayout";
import ActualCoffeeModel from "../components/ActualCoffeeModel";
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
          <Heading fontWeight={700} fontSize={["xl", "xl"]}>
            Coffee
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Latte
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $4.75(H)/$5.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Cappucino
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $4.50(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Americano
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $3.75(H)/$4.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Cortado
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $4.25(H)/$4.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Red Eye
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $4.50(H)/$4.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Cafe Au Lait
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $3.25(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Mocha
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Cortado
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
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
          <Heading fontWeight={700} fontSize={["xl", "xl"]}>
            Specialty
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Matcha Latte
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.25(H)/$5.75(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Rose Latte
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Chai
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.00(H)/$5.50(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Hot Chocolate
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $4.50(H)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Lavendar Latte
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Brown Sugar Latte
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.75(H)/$6.25(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Chai
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.00(H)/$5.50(C)
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Dirty Chai
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $6.25(H)/$6.75(C)
            </Text>
          </HStack>
        </VStack>
      </Box>
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
          <Heading fontWeight={700} fontSize={["xl", "xl"]}>
            Boba
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} spacing={5} pt={6}>
          <VStack spacing={3} alignItems={"flex-start"} width={"100%"}>
            <Box>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
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
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
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
          <Heading fontWeight={700} fontSize={["xl", "xl"]}>
            Hot Bites
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Chicken Tenders
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $8.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Chicken Poppers
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $6.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Onion Rings
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Fries
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $5.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Sweet Potato Fries
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $6.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Pigs in a Blanket
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $7.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Tater Tots
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
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
          <Heading fontWeight={700} fontSize={["xl", "xl"]}>
            Sandwiches & Salads
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Beyond Bussin Sandwich
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $15.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Spicy Chicken Sandwich
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $13.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Italian Panini
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              TunaMelt
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Zesto Chicken Sandwich
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $13.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Turkey Club
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Mixed Green Salad
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $6.50
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Cobb Salad
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $10.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Pizza Panini
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Smoked Salmon Tartine
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $11.00
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading fontSize={["xl", "xl"]} fontWeight={600}>
              Avocado Toast
            </Heading>
            <Text fontSize={["xl", "xl"]} fontWeight={400}>
              $10.00
            </Text>
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

      <SimpleGrid
        display={["inline-block", "none"]}
        columns={[1]}
        spacing={10}
        pt={5}
      >
        <Box
          bg={"neutral.100"}
          height={["100%", "100%"]}
          borderRadius={"lg"}
          p={8}
          color={"brand.900"}
        >
          <HStack>
            <Heading fontWeight={700} fontSize={["xl", "xl"]}>
              Coffee
            </Heading>
          </HStack>
          <Divider borderColor={"brand.700"} borderWidth={1} />
          <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Latte
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $4.75(H)/$5.25(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Cappucino
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $4.50(H)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Americano
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $3.75(H)/$4.25(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Cortado
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $4.25(H)/$4.75(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Red Eye
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $4.50(H)/$4.75(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Cafe Au Lait
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $3.25(H)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Mocha
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.75(H)/$6.25(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Cortado
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $4.25(H)/$4.75(C)
              </Text>
            </HStack>
          </VStack>
          <Box
            id={"realCoffee"}
            alignSelf={"flex-start"}
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            pl={"80px"}
            color={"transparent"}
            width={["50%", "0px"]}
            minWidth={"200px"}
          >
            .
          </Box>
        </Box>
        <Box
          bg={"neutral.100"}
          height={["100%", "100%"]}
          borderRadius={"lg"}
          p={8}
          color={"brand.900"}
        >
          <HStack>
            <Heading fontWeight={700} fontSize={["xl", "xl"]}>
              Specialty
            </Heading>
          </HStack>
          <Divider borderColor={"brand.700"} borderWidth={1} />
          <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Matcha Latte
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.25(H)/$5.75(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Rose Latte
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.75(H)/$6.25(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Chai
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.00(H)/$5.50(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Hot Chocolate
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $4.50(H)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Lavendar Latte
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.75(H)/$6.25(C)
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Brown Sugar Latte
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.75(H)/$6.25(C)
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Box
          bg={"neutral.100"}
          height={"100%"}
          borderRadius={"lg"}
          p={8}
          color={"brand.900"}
        >
          <HStack>
            <Heading fontWeight={700} fontSize={["xl", "xl"]}>
              Boba
            </Heading>
          </HStack>
          <Divider borderColor={"brand.700"} borderWidth={1} />
          <VStack width={"100%"} alignItems={"flex-start"} spacing={5} pt={6}>
            <VStack spacing={3} alignItems={"flex-start"} width={"100%"}>
              <Box>
                <Heading fontSize={["xl", "xl"]} fontWeight={600}>
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
                <Heading fontSize={["xl", "xl"]} fontWeight={600}>
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
          bg={"neutral.100"}
          height={"100%"}
          borderRadius={"lg"}
          p={8}
          color={"brand.900"}
        >
          <HStack>
            <Heading fontWeight={700} fontSize={["xl", "xl"]}>
              Hot Bites
            </Heading>
          </HStack>
          <Divider borderColor={"brand.700"} borderWidth={1} />
          <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Chicken Tenders
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $8.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Chicken Poppers
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $6.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Onion Rings
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Fries
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Sweet Potato Fries
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $6.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Pigs in a Blanket
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $7.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Tater Tots
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $5.00
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Box
          bg={"neutral.100"}
          height={"100%"}
          borderRadius={"lg"}
          p={8}
          color={"brand.900"}
        >
          <HStack>
            <Heading fontWeight={700} fontSize={["xl", "xl"]}>
              Sandwiches & Salads
            </Heading>
          </HStack>
          <Divider borderColor={"brand.700"} borderWidth={1} />
          <VStack width={"100%"} alignItems={"flex-start"} pt={6}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Beyond Bussin Sandwich
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $15.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Spicy Chicken Sandwich
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $13.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Italian Panini
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $11.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                TunaMelt
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $11.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Zesto Chicken Sandwich
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $13.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Turkey Club
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $11.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Mixed Green Salad
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $6.50
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Cobb Salad
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $10.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Pizza Panini
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $11.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Smoked Salmon Tartine
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $11.00
              </Text>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={["xl", "xl"]} fontWeight={600}>
                Avocado Toast
              </Heading>
              <Text fontSize={["xl", "xl"]} fontWeight={400}>
                $10.00
              </Text>
            </HStack>
          </VStack>
        </Box>
      </SimpleGrid>

      <Center display={["none", "inline-block"]}>
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
        </Box>
      </Center>
    </PageLayout>
  );
};

export default Menu;

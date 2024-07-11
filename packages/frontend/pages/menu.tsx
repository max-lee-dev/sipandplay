import type { NextPage } from "next";
import {
  Box,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const CoffeeMenu = (): JSX.Element => {
  return (
    <Box
      bg={"brand.200"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Heading fontWeight={700} fontSize={"2xl"}>
        Coffee
      </Heading>
      <Divider borderColor={"brand.700"} borderWidth={1} />
      <VStack width={"100%"} alignItems={"flex-start"} pt={2}>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight={400}>
            Latte
          </Text>
          <Text fontSize={"md"} fontWeight={400}>
            $4.75(H)/$5.25(C)
          </Text>
        </HStack>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight={400}>
            Cappucino
          </Text>
          <Text fontSize={"md"} fontWeight={400}>
            $4.50(H)
          </Text>
        </HStack>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight={400}>
            Americano
          </Text>
          <Text fontSize={"md"} fontWeight={400}>
            $3.75(H)/$4.25(C)
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

const BobaMenu = (): JSX.Element => {
  return (
    <Box
      bg={"brand.200"}
      height={"100%"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <Heading fontWeight={700} fontSize={"2xl"}>
        Boba
      </Heading>
      <Divider borderColor={"brand.700"} borderWidth={1} />
      <VStack width={"100%"} alignItems={"flex-start"} pt={2}>
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text fontSize={"md"} fontWeight={500}>
            The OG
          </Text>
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
    </Box>
  );
};

const Menu: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Heading pt={5} fontSize={["xl", "3xl"]}>
        Menu
      </Heading>
      <Divider borderWidth={3} borderColor={"brand.500"} width={"5%"} />
      <SimpleGrid columns={[1, 2, 3]} spacing={10} pt={5}>
        <CoffeeMenu />
        <BobaMenu />
      </SimpleGrid>
    </PageLayout>
  );
};

export default Menu;

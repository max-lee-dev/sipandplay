import type { NextPage } from "next";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";
import CoffeeModel from "../components/CoffeeModel";
import NoSsr from "../components/no-ssr";

const CoffeeMenu = (): JSX.Element => {
  return (
    <Box>
      <NoSsr />
      <CoffeeModel />
      <Box
        bg={"brand.200"}
        height={"fit-content"}
        borderRadius={"lg"}
        p={8}
        color={"brand.900"}
      >
        <HStack>
          <Heading fontWeight={700} fontSize={"2xl"}>
            Coffee
          </Heading>
        </HStack>
        <Divider borderColor={"brand.700"} borderWidth={1} />
        <VStack width={"100%"} alignItems={"flex-start"} pt={2}>
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
        </VStack>
      </Box>
      <Box>
        <Image
          src={"/examplecoffee.png"}
          alt={"coffee"}
          pt={2}
          borderRadius={5}
          width={"100%"}
        />
      </Box>
    </Box>
  );
};

const SpecialtyMenu = (): JSX.Element => {
  return (
    <Box
      bg={"brand.200"}
      height={"fit-content"}
      borderRadius={"lg"}
      p={8}
      color={"brand.900"}
    >
      <HStack>
        <Heading fontWeight={700} fontSize={"2xl"}>
          Specialty
        </Heading>
      </HStack>
      <Divider borderColor={"brand.700"} borderWidth={1} />
      <VStack width={"100%"} alignItems={"flex-start"} pt={2}>
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
        x
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
      <HStack>
        <Heading fontWeight={700} fontSize={"2xl"}>
          Boba
        </Heading>
      </HStack>
      <Divider borderColor={"brand.700"} borderWidth={1} />
      <VStack width={"100%"} alignItems={"flex-start"} spacing={5} pt={2}>
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
        <SpecialtyMenu />
        <BobaMenu />
      </SimpleGrid>
    </PageLayout>
  );
};

export default Menu;

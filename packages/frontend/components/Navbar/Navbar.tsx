import {
  Box,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import PageLayout from "../Layout/PageLayout";

const Navbar = (): JSX.Element => {
  return (
    <Box width={"100%"} mb={2} as={"nav"} bg={"neutral.100"}>
      <PageLayout>
        <HStack
          p={2}
          spacing={[10, "260px"]}
          justifyContent={["space-between", "inherit"]}
        >
          <HStack pl={4} spacing={4} as={"a"} href={"/"}>
            <img src={"/sipnplaycropped.png"} width={"60px"} alt={"logo"} />
          </HStack>

          <HStack
            width={"50%"}
            display={["none", "flex"]}
            spacing={2}
            justifyContent={"space-evenly"}
          >
            <Box
              fontSize={"md"}
              fontWeight={500}
              as={"a"}
              href={"https://www.sipnplaynyc.com/about"}
            >
              <Heading fontSize={"md"}>About</Heading>
            </Box>

            <Box fontSize={"md"} fontWeight={500} as={"a"} href={"/events"}>
              <Heading fontSize={"md"}>Events</Heading>
            </Box>
            <Box
              fontSize={"md"}
              fontWeight={500}
              as={"a"}
              href={
                "https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?usp=sharing"
              }
            >
              <Heading fontSize={"md"}>Our Games</Heading>
            </Box>
            <Box fontSize={"md"} fontWeight={500} as={"a"} href={"/menu"}>
              <Heading fontSize={"md"}>Menu</Heading>
            </Box>
            <Box
              fontSize={"md"}
              fontWeight={500}
              as={"a"}
              href={"https://www.sipnplaynyc.com/reservations"}
            >
              <Heading fontSize={"md"}>Reservations</Heading>
            </Box>
          </HStack>
          <Box
            paddingTop={"0px"}
            paddingRight={"40px"}
            display={["block", "none"]}
          >
            <Menu>
              <MenuButton
                fontSize={"27px"}
                fontWeight={"400"}
                _hover={{ color: "brand.500" }}
                cursor={"pointer"}
              >
                &#9776;
              </MenuButton>
              <MenuList zIndex={"101"}>
                <MenuItem>
                  <Box minW={"100%"} as={"a"} href={"/"}>
                    Home
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Box
                    minW={"100%"}
                    as={"a"}
                    href={"https://www.sipnplaynyc.com/about"}
                  >
                    About
                  </Box>
                </MenuItem>
                <MenuDivider />

                <MenuItem>
                  <Box minW={"100%"} as={"a"} href={"/events"}>
                    Events
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Box minW={"100%"} as={"a"} href={"/menu"}>
                    Menu
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </PageLayout>
    </Box>
  );
};

export default Navbar;

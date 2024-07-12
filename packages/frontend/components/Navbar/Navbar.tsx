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
          spacing={[10, "200px"]}
          justifyContent={["space-between", "space-between"]}
        >
          <HStack spacing={4} as={"a"} href={"/"}>
            <img src={"/sipnplaycropped.png"} width={"60px"} alt={"logo"} />
            <Heading fontSize={["xl", "3xl"]}>Sip & Play</Heading>
          </HStack>

          <HStack
            width={"50%"}
            display={["none", "flex"]}
            spacing={10}
            justifyContent={"space-evenly"}
          >
            <Box
              fontSize={"xl"}
              fontWeight={500}
              as={"a"}
              href={"https://www.sipnplaynyc.com/about"}
            >
              About
            </Box>

            <Box fontSize={"xl"} fontWeight={500} as={"a"} href={"/events"}>
              Events
            </Box>
            <Box fontSize={"xl"} fontWeight={500} as={"a"} href={"/menu"}>
              Menu
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

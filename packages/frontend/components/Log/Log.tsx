import React from "react";
import { Box, Button, Divider, Heading, HStack } from "@chakra-ui/react";

const Log = ({ selectedDay }: { selectedDay: number | null }): JSX.Element => {
  const hasEvent = selectedDay === 15;
  return (
    <Box
      alignItems={["center", "flex-start"]}
      bg={"neutral.100"}
      height={["200px", "600px"]}
      borderRadius={5}
      p={[4, 8]}
      width={["350px", "700px"]}
    >
      <Heading p={2} alignSelf={"flex-start"} fontSize={["2xl", "2xl"]}>
        July {selectedDay}
      </Heading>
      <Divider borderWidth={1} />
      <Box height={"100%"} p={4}>
        {hasEvent ? (
          <Box borderRadius={3} borderWidth={1} p={2}>
            <Heading fontWeight={600} fontSize={"xl"}>
              Modern Heroes 3
            </Heading>
            <Divider />
            <HStack justifyContent={"space-between"} p={2}>
              <Box>
                <Heading fontWeight={500} fontSize={"md"}>
                  11:00 AM - 4:30 PM EDT
                </Heading>
                <Heading fontWeight={500} fontSize={"md"}>
                  471 5th Ave NY 11215
                </Heading>
                <Heading fontWeight={500} fontSize={"md"}>
                  $75.00
                </Heading>
              </Box>
              <Button
                as={"a"}
                href={"https://square.link/u/qzq0q6Fq"}
                colorScheme={"green"}
              >
                RSVP
              </Button>
            </HStack>
          </Box>
        ) : (
          <Box
            width={"100%"}
            display={"flex"}
            alignContent={"center"}
            height={"80%"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Heading width={"100%"} fontWeight={500} fontSize={"xl"}>
              No events scheduled yet :(
            </Heading>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Log;

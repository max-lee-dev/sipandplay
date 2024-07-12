import React from "react";
import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import { MdEventNote } from "react-icons/md";

const DayCell = ({
  selectedDay,
  idx,
  day,
  setDay,
}: {
  selectedDay: number | null;
  idx: number;
  day: number;
  setDay: (idx: number) => void;
}): JSX.Element => {
  const hasEvent = idx === 15 || idx === 25 || idx === 28; // Injected events for demonstration purposes
  const beforeToday = idx < 11;
  return (
    <Box onClick={() => setDay(idx)}>
      <VStack
        cursor={"pointer"}
        bg={beforeToday ? "neutral.200" : "transparent "}
        borderRight={(day + 1) % 7 === 0 ? 0 : "2px"}
        spacing={[0, 1]}
        borderColor={"neutral.200"}
        width={["50px", "100px"]}
        height={["50px", "100px"]}
      >
        <Box
          bg={selectedDay === idx ? "brand.300" : "transparent"}
          width={"30px"}
          textAlign={"center"}
          borderRadius={100}
          mr={1}
          alignSelf={"flex-end"}
        >
          <Text>{day}</Text>
        </Box>
        {hasEvent && ( // Demo example, injected events
          <Box>
            <Box display={["none", "block"]} opacity={1} borderRadius={10}>
              <Text
                textAlign={"center"}
                fontWeight={900}
                fontSize={"5xl"}
                color={"brand.500"}
              >
                <MdEventNote />
              </Text>
            </Box>
            <Box
              mt={-1}
              display={["block", "none"]}
              bg={"neutral.200"}
              opacity={1}
              borderRadius={10}
            >
              <Text
                textAlign={"center"}
                fontWeight={900}
                fontSize={"2xl"}
                color={"brand.500"}
              >
                <MdEventNote />
              </Text>
            </Box>
          </Box>
        )}
      </VStack>
      <Divider borderWidth={"1px"} />
    </Box>
  );
};

export default DayCell;

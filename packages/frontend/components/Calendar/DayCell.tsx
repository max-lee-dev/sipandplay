import React from "react";
import { Box, Divider, VStack } from "@chakra-ui/react";

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
  const hasEvent = idx === 10;
  return (
    <Box onClick={() => setDay(idx)}>
      <VStack
        cursor={"pointer"}
        borderRight={(day + 1) % 7 === 0 ? 0 : "2px"}
        borderColor={"neutral.200"}
        width={["50px", "100px"]}
        height={["50px", "100px"]}
      >
        <Box
          bg={selectedDay === idx ? "brand.300" : "transparent"}
          width={"30px"}
          textAlign={"center"}
          borderRadius={50}
          mr={1}
          alignSelf={"flex-end"}
        >
          {day}
        </Box>
        {hasEvent && ( // Demo example, injected events
          <Box>
            <Box
              display={["none", "block"]}
              bg={"brand.600"}
              width={"80px"}
              height={"40px"}
              borderRadius={10}
            ></Box>
            <Box
              display={["block", "none"]}
              bg={"brand.300"}
              width={"50px"}
              height={"10px"}
              borderRadius={50}
            />
          </Box>
        )}
      </VStack>
      <Divider borderWidth={"1px"} />
    </Box>
  );
};

export default DayCell;

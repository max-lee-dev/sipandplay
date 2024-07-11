import React from "react";
import { Box, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import DayCell from "./DayCell";

const Weekday = ({ day }: { day: string }): JSX.Element => {
  return (
    <Box>
      {" "}
      <Box textAlign={"center"} p={2}>
        {day}
      </Box>
      <Divider />
    </Box>
  );
};

const Calendar = ({
  selectedDay,
  setSelectedDay,
}: {
  selectedDay: number | null;
  setSelectedDay: (idx: number) => void;
}): JSX.Element => {
  return (
    <Box
      alignItems={["center", "flex-start"]}
      bg={"neutral.100"}
      borderRadius={5}
      width={"fit-content"}
    >
      <Heading p={2} alignSelf={"flex-start"} fontSize={["xl", "2xl"]}>
        July 2024
      </Heading>
      <SimpleGrid
        borderRadius={5}
        columns={7}
        width={["350px", "700px"]}
        borderColor={"neutral.500"}
        borderWidth={0}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Weekday day={day} key={day} />
        ))}
        {Array.from({ length: 32 }, (_, i) => (
          <DayCell
            idx={i}
            selectedDay={selectedDay}
            setDay={setSelectedDay}
            day={i === 0 ? 31 : i}
            key={i}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Calendar;
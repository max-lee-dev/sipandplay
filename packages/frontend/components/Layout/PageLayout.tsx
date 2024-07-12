import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MyHeadingProps } from "./MyHeading";

type PageLayoutProps = MyHeadingProps & {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps): JSX.Element => (
  <Box px={[0, 0]} width={"100%"}>
    {children}
  </Box>
);
export default PageLayout;

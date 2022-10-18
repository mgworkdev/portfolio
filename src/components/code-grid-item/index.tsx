import { Box, Text, Flex, GridItem, AspectRatio } from "@chakra-ui/react";
import { CodeGridItemProps } from "../../types";

const CodeGridItem = ({ title, poster }: CodeGridItemProps) => {
  return (
    <GridItem>
      <Flex direction={"column"} gap="10px" alignItems={"flex-start"}>
        <Text fontWeight="700" fontSize="xl">
          {title}
        </Text>
        <AspectRatio border="1px solid #fff" width="100%" ratio={9 / 6}>
          <Box height="100%" width="100%" background="blue"></Box>
        </AspectRatio>
      </Flex>
    </GridItem>
  );
};

export default CodeGridItem;

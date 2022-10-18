import { Box, Text, Heading, useColorModeValue, Grid } from "@chakra-ui/react";
import { CodeGridItem } from "../../components";

const CodeExamples = () => {
  const summaryTextColor = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  );

  return (
    <Box padding={["60px", "60px", "60px", "80px 90px", "80px 90px"]}>
      <Heading as={"h2"}>{"Code Examples"}</Heading>
      <Text margin="20px 0 60px" color={summaryTextColor}>
        {
          "Collection of demos using React, data sources, and libraries. Source code is on Github."
        }
      </Text>
      <Grid
        margin="30px 0 60px"
        color={summaryTextColor}
        width="100%"
        templateColumns="repeat(2, 1fr)"
        gap="40px"
      >
        <CodeGridItem
          title={"Drawing and Chat using WebRTC"}
          poster={""}
          onClick={() => console.log("ouch")}
        />
        <CodeGridItem
          title={"World Weather Globe using Three.js"}
          poster={""}
          onClick={() => console.log("ouch")}
        />
        <CodeGridItem
          title={"AR Face Mask using Tensorflow"}
          poster={""}
          onClick={() => console.log("ouch")}
        />
      </Grid>
    </Box>
  );
};

export default CodeExamples;

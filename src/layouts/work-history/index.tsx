import {
  Box,
  Text,
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ENDPOINT_RESUME } from "../../constants/endpoints";
import { useFetch } from "../../hooks";

type RoleProps = {
  title: String;
  company: String;
};

const Role = ({ title, company }: RoleProps) => {
  return <Box>{title}</Box>;
};

const WorkHistory = () => {
  const { isLoading, serverError, apiData }: any = useFetch(ENDPOINT_RESUME);
  const textColor = useColorModeValue("blackAlpha.800", "whiteAlpha.700");

  return (
    <Flex
      justifyContent={isLoading ? "center" : "flex-start"}
      padding={["80px"]}
      minHeight="100vh"
      alignItems={isLoading ? "center" : "flex-start"}
    >
      {isLoading && <Spinner color="brand.blue" size="xl" />}
      {isLoading === false && apiData === null && <Text>{"Error"}</Text>}
      {isLoading === false && apiData !== null && (
        <Box>
          <Heading as={"h2"}>{"Summary"}</Heading>
          <Text color={textColor}>{apiData.summary}</Text>
          <Heading as={"h2"} margin="30px 0 5px">
            {"History"}
          </Heading>
          {apiData.roles.map((role: RoleProps, idx: React.Key) => {
            const { title, company } = role;
            return <Role key={idx} title={title} company={company} />;
          })}
        </Box>
      )}
    </Flex>
  );
};

export default WorkHistory;

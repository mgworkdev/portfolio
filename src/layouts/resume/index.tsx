import {
  Box,
  Text,
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import { ENDPOINT_RESUME } from "../../constants/endpoints";
import { useFetch } from "../../hooks";
import { Role } from "../../components";
import { RoleProps } from "../../types";

const Resume = () => {
  const { isLoading, apiData }: any = useFetch(ENDPOINT_RESUME);
  const summaryTextColor = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  );

  return (
    <Flex
      justifyContent={isLoading ? "center" : "flex-start"}
      padding={["60px", "60px", "60px", "80px 90px", "80px 90px"]}
      alignItems={isLoading ? "center" : "flex-start"}
    >
      {isLoading && <Spinner color="brand.blue" size="xl" />}
      {isLoading === false && apiData === null && <Text>{"Error"}</Text>}
      {isLoading === false && apiData !== null && (
        <Box>
          <Heading as={"h2"}>{"Summary"}</Heading>
          <Text margin="20px 0 60px" color={summaryTextColor}>
            {apiData.summary}
          </Text>
          <Heading as={"h2"}>{"History"}</Heading>
          {apiData.roles.map((role: RoleProps, idx: React.Key) => {
            const {
              title,
              company,
              achievements,
              skillset,
              description,
              start,
              end,
              contract,
            } = role;
            const startMoment = moment(start);
            const endMoment = moment(end);
            const duration = endMoment.diff(startMoment, "months");

            return (
              <Role
                key={idx}
                contract={contract}
                title={title}
                company={company}
                skillset={skillset}
                description={description}
                start={start}
                achievements={achievements}
                end={end}
                duration={duration}
              />
            );
          })}
        </Box>
      )}
    </Flex>
  );
};

export default Resume;

import {
  Box,
  Text,
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import Moment from "react-moment";
import { ENDPOINT_RESUME } from "../../constants/endpoints";
import { useFetch } from "../../hooks";

type RoleProps = {
  contract: boolean;
  title: string;
  company: string;
  description: string;
  skillset: Array<string>;
  achievements: Array<string>;
  start: number;
  end: number;
  duration: number;
  contracts: Array<JobDetailsProps>;
};

type JobDetailsProps = {
  contract: boolean;
  title: string;
  company: string;
  description: string;
  skillset: Array<string>;
  achievements: Array<string>;
  start: number;
  end: number;
  duration: number;
};

function formatDuration(duration: number) {
  const years = Math.floor(duration / 12);
  const months = duration % 12;
  const yearsText = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthsText = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  return `(${yearsText} ${monthsText})`;
}

const JobDetails = ({
  company,
  start,
  end,
  duration,
  description,
  achievements,
  skillset,
  title,
  contract,
}: JobDetailsProps) => {
  const colors = {
    title: useColorModeValue("blackAlpha.900", "whiteAlpha.900"),
    company: useColorModeValue("blackAlpha.900", "whiteAlpha.900"),
    description: useColorModeValue("blackAlpha.700", "whiteAlpha.700"),
    period: useColorModeValue("blackAlpha.700", "whiteAlpha.700"),
    tag: {
      background: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      color: useColorModeValue("blackAlpha.700", "whiteAlpha.700"),
    },
  };

  return (
    <Box>
      <Flex marginBottom="2px" alignItems={"flex-end"}>
        <Text fontWeight="700" fontSize="xl">
          {title}
        </Text>
        {contract && (
          <Text
            paddingLeft="10px"
            fontStyle="italic"
            fontWeight="500"
            fontSize="lg"
          >
            {"Contract"}
          </Text>
        )}
      </Flex>
      <Flex
        direction={["column", "row"]}
        color={colors.company}
        gap="10px"
        alignItems={["start", "end"]}
      >
        <Text fontWeight={500} fontSize="lg">
          {company}
        </Text>
        {start && end && (
          <Flex gap="5px" color={colors.period} whiteSpace="nowrap">
            <Moment format="MMM YYYY">{start}</Moment>
            <Text>-</Text>
            <Moment format="MMM YYYY">{end}</Moment>
            <Text>{formatDuration(duration)}</Text>
          </Flex>
        )}
      </Flex>
      {description && (
        <Text padding="10px 0" color={colors.description}>
          {description}
        </Text>
      )}
      {achievements && (
        <UnorderedList paddingBottom="10px">
          {achievements.map((achievement) => (
            <ListItem fontStyle={"italic"}>{achievement}</ListItem>
          ))}
        </UnorderedList>
      )}
      <Box padding="10px 0">
        {skillset.map((tag) => (
          <Tag
            size="md"
            marginRight="10px"
            backgroundColor={colors.tag.background}
          >
            <TagLabel color={colors.tag.color}>{tag}</TagLabel>
          </Tag>
        ))}
      </Box>
    </Box>
  );
};

const Role = ({
  title = "",
  company = "",
  description = "",
  achievements = [],
  skillset = [],
  start = 0,
  end = 0,
  duration = 0,
  contract = false,
}: RoleProps) => {
  return (
    <Box padding="20px 0">
      <JobDetails
        title={title}
        start={start}
        end={end}
        duration={duration}
        company={company}
        description={description}
        achievements={achievements}
        skillset={skillset}
        contract={contract}
      />
    </Box>
  );
};

const WorkHistory = () => {
  const { isLoading, serverError, apiData }: any = useFetch(ENDPOINT_RESUME);
  const summaryTextColor = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  );

  return (
    <Flex
      justifyContent={isLoading ? "center" : "flex-start"}
      padding={["60px", "60px", "60px", "60px", "80px 90px"]}
      alignItems={isLoading ? "center" : "flex-start"}
    >
      {isLoading && <Spinner color="brand.blue" size="xl" />}
      {isLoading === false && apiData === null && <Text>{"Error"}</Text>}
      {isLoading === false && apiData !== null && (
        <Box>
          <Heading as={"h2"}>{"Summary"}</Heading>
          <Text margin="30px 0 60px" color={summaryTextColor}>
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
              contracts,
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
                contracts={contracts}
              />
            );
          })}
        </Box>
      )}
    </Flex>
  );
};

export default WorkHistory;

import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Tag,
  TagLabel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Moment from "react-moment";
import { formatDuration } from "../../helpers";
import { RoleProps } from "../../types";

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
    <Box padding="20px 0">
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
        <Flex gap="5px" color={colors.period} whiteSpace="nowrap">
          <Moment format="MMM YYYY">{start}</Moment>
          <Text>-</Text>
          <Moment format="MMM YYYY">{end}</Moment>
          <Text>{formatDuration(duration)}</Text>
        </Flex>
      </Flex>
      <Text padding="10px 0" color={colors.description}>
        {description}
      </Text>
      <UnorderedList paddingBottom="10px">
        {achievements.map((achievement) => (
          <ListItem fontStyle={"italic"}>{achievement}</ListItem>
        ))}
      </UnorderedList>
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

export default Role;

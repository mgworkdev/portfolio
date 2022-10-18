import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import {
  AiFillMediumSquare,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { SidebarProps } from "../../types";

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Box width={["280px", "280px", "280px", "350px", "350px"]}>
      <VStack
        spacing="30px"
        padding={["30px", "30px", "60px 10px 0 40px", "80px", "80px"]}
        width={["280px", "280px", "280px", "350px", "350px"]}
        alignItems="flex-start"
        position={"fixed"}
        height="100%"
        overflow={"auto"}
        backgroundColor={useColorModeValue("brand.lightBlue", "brand.blue")}
      >
        <Box>
          <Link href="/" _hover={{ underline: "none" }}>
            <Text
              color={useColorModeValue("brand.blue", "white")}
              fontWeight="500"
              fontSize="3xl"
            >
              {"Mike Goldberg"}
            </Text>
          </Link>
          <Text fontWeight="300" fontSize="lg">
            {"Developer"}
          </Text>
        </Box>
        <HStack gap="8px">
          <Tooltip label="LinkedIn Profile">
            <Link href="https://www.linkedin.com/in/mike-goldberg/" isExternal>
              <AiFillLinkedin size={"26"} />
            </Link>
          </Tooltip>
          <Tooltip label="Github Code">
            <Link href="#">
              <AiFillGithub size={"26"} />
            </Link>
          </Tooltip>
          <Tooltip label="Medium Blog">
            <Link href="#">
              <AiFillMediumSquare size={"26"} />
            </Link>
          </Tooltip>
          <Tooltip label="Email">
            <Link href="#">
              <AiOutlineMail size={"26"} />
            </Link>
          </Tooltip>
        </HStack>
        <Box paddingTop={["10px", "10px", "10px", "40px", "40px"]}>
          {children}
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;

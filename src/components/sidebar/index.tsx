import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

type Props = {
  children: JSX.Element;
};

const Sidebar = ({ children }: Props) => {
  return (
    <Box
      height="100vh"
      backgroundColor={useColorModeValue("brand.lightBlue", "brand.blue")}
    >
      <VStack
        spacing="40px"
        padding={[
          "30px",
          "30px",
          "80px 10px 0 40px",
          "80px 10px 0 40px",
          "80px",
        ]}
        alignItems="flex-start"
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
            <Link>
              <AiFillGithub size={"26"} />
            </Link>
          </Tooltip>
          <Tooltip label="Email">
            <Link>
              <AiOutlineMail size={"26"} />
            </Link>
          </Tooltip>
        </HStack>
        <Box paddingTop="60px">{children}</Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;

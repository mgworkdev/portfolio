import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

type Props = {
  children: JSX.Element;
};

const Sidebar = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      height="100vh"
      backgroundColor={useColorModeValue("brand.lightBlue", "brand.blue")}
    >
      <VStack spacing="40px" padding="80px" alignItems="start">
        <Box>
          <Text fontWeight="500" fontSize="3xl">
            {"Mike Goldberg"}
          </Text>
          <Text fontWeight="300" fontSize="lg">
            {"Developer"}
          </Text>
        </Box>
        <HStack>
          <Link href="https://www.linkedin.com/in/mike-goldberg/" isExternal>
            <AiFillLinkedin size={"26"} />
          </Link>
          <Link>
            <AiFillGithub size={"26"} />
          </Link>
          <Link>
            <AiOutlineMail size={"26"} />
          </Link>
        </HStack>
        <Box paddingTop="60px">{children}</Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;

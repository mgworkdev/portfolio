import { VStack } from "@chakra-ui/react";
import NavLink from "./navLink";

const Menu = () => {
  return (
    <VStack gap="5px">
      <NavLink label={"Work History"} to={"/"} />
      <NavLink label={"Code Examples"} to={"/code-examples"} />
    </VStack>
  );
};

export default Menu;

import { VStack } from "@chakra-ui/react";
import NavLink from "./navLink";

const Menu = () => {
  return (
    <VStack gap="5px">
      <NavLink label={"Resume"} to={"/"} />
      <NavLink label={"Work Examples"} to={"/work-examples"} />
    </VStack>
  );
};

export default Menu;

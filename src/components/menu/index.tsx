import { VStack } from "@chakra-ui/react";
import NavLink from "./nav-link";

const Menu = () => {
  return (
    <VStack gap="5px">
      <NavLink label={"Resume"} to={"/"} />
      <NavLink label={"Code Examples"} to={"/code-examples"} />
      <NavLink label={"Projects"} to={"/projects"} />
    </VStack>
  );
};

export default Menu;

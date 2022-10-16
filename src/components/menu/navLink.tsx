import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink as ReactRouterNavLink, useLocation } from "react-router-dom";

const NavLink = ({ label, to }: any) => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setIsActive(pathname === to), [pathname, to]);

  return (
    <ReactRouterNavLink to={to}>
      <Box
        padding="15px 60px"
        width="300px"
        position="relative"
        marginLeft="-60px"
        _after={{
          content: "' '",
          borderWidth: "1px 0",
          borderImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .2), rgba(255, 255, 255, 0)) 1 1 100%",
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          background: useColorModeValue("brand.lightBlue", "brand.blue"),
          transition: "opacity 200ms linear",
          opacity: isActive ? 1 : 0,
        }}
        _before={{
          content: "' '",
          width: "calc(100% - 60px)",
          position: "absolute",
          left: "30px",
          top: 0,
          height: "100%",
          boxShadow: "0 0 35px rgba(0, 0, 0, 0.1)",
          transition: "opacity 200ms linear",
          opacity: isActive ? 1 : 0,
        }}
      >
        <Text fontWeight={500} fontSize="22" position="relative" zIndex={1}>
          {label}
        </Text>
      </Box>
    </ReactRouterNavLink>
  );
};

export default NavLink;

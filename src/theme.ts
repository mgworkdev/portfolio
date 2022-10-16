import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      dark: "#0d0d0d",
      blue: "#21609a",
      lightBlue: "#abcde3",
      light: "#dfdfdf",
    },
  },
  components: {
    Button: {
      variants: {
        ghost: (props: StyleFunctionProps) => ({
          _hover: {
            bg: mode("blackAlpha.200", "whiteAlpha.200")(props),
          },
        }),
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Roboto Flex, sans-serif",
        fontWeight: 300,
        color: mode("brand.dark", "brand.light")(props),
        bg: mode("brand.light", "brand.dark")(props),
        lineHeight: "base",
      },
    }),
  },
});

export default theme;

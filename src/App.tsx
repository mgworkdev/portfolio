import { ChakraProvider, Box, Flex, Show } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Resume, CodeExamples } from "./layouts";
import { Sidebar, Menu } from "./components";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher position={"fixed"} right="0" margin="10px" />
    <Flex>
      <BrowserRouter>
        <Show above="md">
          <Sidebar>
            <Menu />
          </Sidebar>
        </Show>
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="code-examples" element={<CodeExamples />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Flex>
  </ChakraProvider>
);

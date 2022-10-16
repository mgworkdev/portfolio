import { ChakraProvider, Box, HStack, Show } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WorkHistory } from "./layouts";
import { Sidebar, Menu } from "./components";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher position={"absolute"} right="0" margin="5px" />
    <HStack>
      <BrowserRouter>
        <Show above="md">
          <Box flex="1" height="100vh">
            <Sidebar>
              <Menu />
            </Sidebar>
          </Box>
        </Show>
        <Box flex="2">
          <Routes>
            <Route path="/" element={<WorkHistory />}>
              <Route path="code-demos" element={<></>} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </HStack>
  </ChakraProvider>
);

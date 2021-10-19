import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Index } from "./pages";
import { Play } from "./pages/play";
import { theme } from "./theme";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const PUBLIC_URL = "https://ishowta.github.io/dovon-quiz/";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Router basename={PUBLIC_URL}>
        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

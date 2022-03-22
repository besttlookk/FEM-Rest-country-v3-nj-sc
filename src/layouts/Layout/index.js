import React, { useContext } from "react";
import { GlobalStyle } from "../Global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";
import Header from "../Header";
import { AppContext } from "../../contexts/appContext";
import { Wrapper } from "../Share";

const Layout = ({ children }) => {
  const { isDark } = useContext(AppContext);
  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default Layout;

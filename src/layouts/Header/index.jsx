import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import { IconContainer, Wrapper } from "../Share";
import MonnIcon from "../../assets/moon-solid.svg";
import SunIcon from "../../assets/sun-solid.svg";
import {
  HeaderContainer,
  HeaderEl,
  HeaderLeft,
  HeaderRight,
  HeaderToggle,
} from "./styled";

const Header = () => {
  const { setIsDark, isDark } = useContext(AppContext);

  const handleTheme = () => {
    setIsDark((prev) => !prev);
    window.localStorage.setItem("REST_color-theme-v3", JSON.stringify(!isDark));
  };
  return (
    <HeaderEl>
      <Wrapper>
        <HeaderContainer>
          <HeaderLeft>
            <h1>Where in the world?</h1>
          </HeaderLeft>

          {/* Right side */}
          <HeaderRight>
            <IconContainer>{isDark ? <SunIcon /> : <MonnIcon />}</IconContainer>

            <HeaderToggle onClick={handleTheme}>
              {!isDark ? "Dark Mode" : "Light Mode"}
            </HeaderToggle>
          </HeaderRight>
        </HeaderContainer>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;

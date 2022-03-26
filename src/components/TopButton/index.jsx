import React, { useState } from "react";
import UpIcon from "../../assets/angle-up-solid.svg";
import TopButtonEl from "./styled";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  let rootElement; // html element

  if (typeof window !== "undefined") {
    rootElement = document.documentElement;
    document.addEventListener("scroll", handleScroll);
  }

  const handleClick = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <TopButtonEl isVisible={isVisible} onClick={handleClick}>
      <UpIcon style={{ transform: "scale(0.5)" }} />
    </TopButtonEl>
  );
};

export default TopButton;

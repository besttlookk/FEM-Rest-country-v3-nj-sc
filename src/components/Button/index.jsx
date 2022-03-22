import React from "react";
import { ButtonEl } from "./styled";

const Button = ({ hadnleBackClick }) => {
  return (
    <ButtonEl onClick={hadnleBackClick}>
      <span>&#x2190;</span>
      <span>Back</span>
    </ButtonEl>
  );
};

export default Button;

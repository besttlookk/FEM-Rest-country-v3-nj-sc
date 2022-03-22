import styled from "styled-components";
import { media } from "../../layouts/Media";

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.1);
  height: 3.5rem;

  ${media.tablet} {
    width: 24rem;
  }
`;

export const SearchIconHolder = styled.span`
  position: absolute;
  top: 50%;
  left: 2.5rem;
  font-size: 1.25rem /* 20px */;
  color: rgb(156 163 175 / 1);
  transform: translate(50%, -50%);
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0.5rem 3rem 0.5rem 6rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.headerBg};
`;

export const CancleIconHolder = styled.span`
  position: absolute;
  top: 50%;
  right: 1.25rem;
  color: rgb(156 163 175 / 1);
  transform: translateY(-60%);
  transition: all.5s;
  cursor: pointer;

  &:hover {
    /* transform: scale(1.05); */
    path {
      fill: red;
    }
  }
`;

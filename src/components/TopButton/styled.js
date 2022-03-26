import styled from "styled-components";
import { media } from "../../layouts/Media";

const TopButtonEl = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 50;
  background-color: gray;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};

  ${media.tablet} {
    bottom: 2rem;
    right: 2rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    path {
      fill: white;
    }
  }
`;
export default TopButtonEl;

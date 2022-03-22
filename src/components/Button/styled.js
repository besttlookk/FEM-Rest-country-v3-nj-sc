import styled from "styled-components";

export const ButtonEl = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.1);
  border-radius: 0.375rem /* 6px */;
  font-weight: bold;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  transition: 0.5s;
  cursor: pointer;

  > span:last-child {
    margin-left: 0.5rem;
    display: inline-block;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 5px 1px rgb(0, 0, 0, 0.3);
  }
`;

import styled from "styled-components";
import { media } from "./Media";

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 4rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
  }
`;

export const FlagContainer = styled.div`
  position: relative;
  height: 16rem;
  margin-bottom: 1rem;

  ${media.tablet} {
    height: 24rem;
  }
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DeatilHeading = styled.p`
  grid-column: 1 / -1;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.headings};

  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

export const DeatilBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

export const DeatilItem = styled.p`
  font-size: 1.1rem;

  > span:first-child {
    font-weight: 700;
    color: ${({ theme }) => theme.headings};
    margin-right: 0.5rem;
  }

  > span:last-child {
    color: ${({ theme }) => theme.text};
  }
`;

export const BorderContainer = styled.div`
  grid-column: 1 / -1;

  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

export const BorderLink = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.headerBg};
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

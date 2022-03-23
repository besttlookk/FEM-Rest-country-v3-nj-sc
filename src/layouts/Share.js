import styled from "styled-components";
import { media } from "./Media";

export const Wrapper = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const IconContainer = styled.div`
  position: relative;
  height: ${({ size }) => (size ? size : "20px")};
  width: ${({ size }) => (size ? size : "20px")};
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.headings};
    path {
      fill: ${({ theme }) => theme.headings};
    }
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

export const Section = styled.section`
  padding: 2.5rem 0;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export const NoResult = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.5rem /* 24px */;
`;

export const FullSpan = styled.div`
  grid-column: 1 / -1;
`;

export const Heading = styled.h3`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.headings};
  font-size: 1.4rem;
  margin-bottom: 1rem;

  ${media.tablet} {
    font-size: 1.6rem;
  }
`;

export const SubHeading = styled(Heading)`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  ${media.tablet} {
    font-size: 1.4rem;
  }
`;

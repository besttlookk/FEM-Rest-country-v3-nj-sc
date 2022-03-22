import styled from "styled-components";
import { media } from "../../layouts/Media";

export const CardLink = styled.a`
  display: block;
  overflow: hidden;
  background-color: ${({ theme }) => theme.headerBg};
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.5s;
  border-radius: 0.75rem /* 12px */;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const CardImageHolder = styled.div`
  position: relative;
  height: 11rem /* 176px */;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const CardMain = styled.div`
  padding: 1.5rem 1.5rem;
`;

export const CardHeading = styled.h3`
  color: ${({ theme }) => theme.headings};
  font-size: 1.25rem /* 20px */;
  margin-bottom: 1rem;

  ${media.tablet} {
    font-size: 1.5rem /* 24px */;
  }
`;

export const CardDeatil = styled.p`
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

import styled from "styled-components";

export const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.headerBg};
  z-index: 50;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: var(--text-2xl);
    color: ${({ theme }) => theme.heading};
    font-weight: 800;
  }
`;

export const HeaderLeft = styled.div`
  color: ${({ theme }) => theme.headings};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderToggle = styled.span`
  margin-left: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

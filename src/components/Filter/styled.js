import styled from "styled-components";

export const FilterEl = styled.div`
  z-index: 40;
  height: 3.5rem;
  width: 280px;
`;

export const FilterField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 100%;
  padding: 20px 28px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};

  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
`;

export const FilterList = styled.ul`
  display: block;
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  list-style: none;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.headerBg};
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.text};

  &.hide {
    display: none;
  }
`;

export const FilterOption = styled.li`
  padding: 5px 28px;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.headerBg};
    font-weight: 800;
  }

  &:active {
    transform: translateY(1px);
  }
`;

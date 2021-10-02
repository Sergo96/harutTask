import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #f7f7f7;
  padding: 0 10px;
`;

export const SideBarItemWrapper = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const SideBarItem = styled.li`
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color .3s ease;
  &:hover {
    background-color: #e3e3e3;
  }
`
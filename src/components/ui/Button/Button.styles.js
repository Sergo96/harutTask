import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  color: ${p => p.isSecondary ? '#000' : '#fff'};
  background: ${p => p.isSecondary ? '#e3e3e3' : '#7549ff'};
  padding: 10px 30px;
  border: none;
  outline: none;
  border-radius: 3px;
  transition: background .3s ease;
  &:hover {
    background: ${p => p.isSecondary ? '#d5d5d5' : '#613dd5'};
  }
`;
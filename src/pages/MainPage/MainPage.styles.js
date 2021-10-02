import styled from 'styled-components'

export const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const CatImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 3px;
  object-fit: cover;
`;

export const InitMessage = styled.span``

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`
import styled, { createGlobalStyle } from "styled-components";
export const StyledCanvas = styled.canvas`
  box-shadow: 8px 10px 108px rgb(39 123 115);
  border: 3px solid #5a935c;
  resize: vertical;
  margin-top: 30px;
  border-radius: 20px;
  &:active{
    cursor: pointer;
  }
`;
export const GlobalStyle = createGlobalStyle`
body{
    background: black;
    padding: 0px;
    margin: 0px;
}
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
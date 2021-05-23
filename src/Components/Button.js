import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainViolet);
  color:   var(--mainWhite);
   
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  background-color: var(--mainViolet);
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: All 0.5s ease-in-out;
  &:hover {
   opacity:0.7;
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;

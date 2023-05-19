import styled from "styled-components";

export
const StyledButton = styled.button`
    padding: 1rem 3.5rem;
    margin: 5px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.425);
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    font-heigth: bold;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 10px;
    }

    &:active {
    color: white;
    background-color: navy;
    }

  @media (max-width: 600px) {
    &:hover {
    background-color: navy;  
    transform: none;
    box-shadow: none;
    }
  }  
`;

export    
const StyledButton2 = styled.button`
    padding: 1rem 3.5rem;
    margin: 5px;
    border: 2px solid navy;
    border-radius: 5px;
    color: navy;
    font-size: 15px;
    text-transform: uppercase;
    font-width: bold;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 10px;

    &:active {
    color: white;
    background-color: rgba(0, 0, 0, 0.425);
    }
  }

`;

export    
const StyledButton3 = styled.button`
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:hover {
    border-color: white;
    color: white;
    background-color: rgba(0, 0, 0, 0.425);
  }
`;
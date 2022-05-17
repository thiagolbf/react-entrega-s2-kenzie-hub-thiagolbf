import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  font-family: "Inter", "sans-serif";
  weight: 400;
  font-size: 12px;
  div {
    color: var(--grey0);
    
  span {
    color: var(--red);
  }
  
  }


  }
`;

export const InputContainer = styled.div`
  background-color: var(--grey2);
  border-radius: 4px;
  margin: 18px 0;

  input {
    width: 330px;
    background: transparent;
    border: 0;
    padding: 10px;

    color: var(--grey50);
    &:focus {
      color: var(--grey0);
    }
  }

  @media (max-width: 600px) {
    input {
      width: 265px;
    }
  }
`;

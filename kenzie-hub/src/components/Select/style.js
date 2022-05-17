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

export const SelectContainer = styled.div`
  background-color: var(--grey2);
  border-radius: 4px;
  margin: 18px 0;

  select {
    background-color: var(--grey2);
    border: 0;
    border-radius: 4px;
    padding: 10px;
    width: 330px;
    color: var(--grey50);
    &:focus {
      color: var(--grey0);
    }
    option {
      border: 0;
      border-radius: 4px;
      padding: 10px;
      width: 330px;
      color: var(--grey50);
      &:focus {
        color: var(--grey0);
      }
    }
  }

  @media (max-width: 600px) {
    select {
      width: 265px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 30px;
    color: var(--colorPrimary);
  }
`;

export const Content = styled.div`
  width: 370px;
  padding: 30px;
  background: var(--grey3);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Inter", "Sans-serif";
    font-size: 18px;
    weight: 700;
    color: var(--grey0);
    margin: 30px 0;
  }

  span {
    color: var(--grey1);
    font-family: "Inter", "Sans-serif";
    font-size: 12px;
    margin: 20px 0;
  }

  a {
    width: 325px;
    font-family: 'Inter', 'sans-serif'
    font-size: 16px;
    weight: 500;
    color: var(--white);
    padding: 10px;
    border: 0;
    border-radius: 4px;
    background-color: var(--colorPrimaryNegative);
    text-align: center;
    &:hover{
            background-color: var(--colorPrimary);
        }  
    }
  }

  @media (max-width: 600px) {
    width: 296px;
    a{
      width: 260px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  display: flex;
  width: 780px;
  justify-content: space-between;
  p {
    color: var(--colorPrimary);
    align-self: center;
  }

  button {
    background-color: var(--grey3);
    color: var(--grey0);
    border: 0;
    border-radius: 4px;
    padding: 10px;
  }
  @media (max-width: 800px) {
    width: 296px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 780px;
  justify-content: space-between;
  margin: 30px 0;
  p {
    font-family: "Inter", "Sans-serif";
    font-size: 18px;
    weight: 700;
    color: var(--grey0);
    margin: 10px 0;
  }

  span {
    color: var(--grey1);
    font-family: "Inter", "Sans-serif";
    font-size: 12px;
    margin: 10px 0;
  }
  @media (max-width: 800px) {
    width: 296px;
  }
`;

export const MainContent = styled.main`
  display: flex;
  width: 780px;
  justify-content: space-between;
  margin: 30px 0;
  p {
    font-family: "Inter", "Sans-serif";
    font-size: 18px;
    weight: 700;
    color: var(--grey0);
    margin: 10px 0;
  }

  button {
    background-color: var(--grey3);
    color: var(--grey0);
    border: 0;
    border-radius: 4px;
    padding: 10px;
  }
  @media (max-width: 800px) {
    width: 296px;
  }
`;

export const ApiDiv = styled.div`
  width: 780px;
  background-color: var(--grey4);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    div {
      display: flex;
      justify-content: space-between;
      background: var(--grey3);
      padding: 10px;
      margin: 5px;
      border-radius: 10px;
      &:hover {
        background: var(--grey1);
      }
    }
  }
  button {
    margin: 0 40px;
  }
  @media (max-width: 800px) {
    width: 296px;
  }
`;

export const Teste = styled.div`
  li {
    width: 100px;
    margin: 10px 0;
    background: red;

    &:hover {
      cursor: pointer;
    }
  }
`;

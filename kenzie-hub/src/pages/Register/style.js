import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  width: 370px;
  justify-content: space-between;
  margin: 20px 0;

  p {
    color: var(--colorPrimary);
    display: inline-block;
    align-self: center;
  }

  a {
    background-color: var(--grey3);
    color: var(--grey0);
    border: 0;
    border-radius: 4px;
    padding: 10px;
  }
  @media (max-width: 600px) {
    width: 296px;
  }
`;

export const Content = styled.div`
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
    margin: 10px 0;
  }

  span {
    color: var(--grey1);
    font-family: "Inter", "Sans-serif";
    font-size: 12px;
    margin: 10px 0;
  }

  @media (max-width: 600px) {
  }
`;

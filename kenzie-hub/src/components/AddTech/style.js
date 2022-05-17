import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(18, 18, 20, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Inter", "Sans-serif";
    font-size: 12px;
    weight: 700;
    color: var(--grey0);
    margin: 10px 10px;
  }

  span {
    color: var(--grey1);
    font-family: "Inter", "Sans-serif";
    font-size: 12px;
    margin: 10px 0;
  }
`;

export const HeadRegister = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--grey2);
  border-radius: 5px;
  width: 350px;

  button {
    margin: 0 10px;
    border: 0;
    background: transparent;
  }

  @media (max-width: 600px) {
    width: 285px;
  }
`;

export const TechRegister = styled.div`
  background: var(--grey3);
  padding: 10px;
  border-radius: 5px;
`;

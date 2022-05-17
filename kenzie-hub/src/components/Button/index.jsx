import { Container } from "./style";

function Button({ text, classe }) {
  return (
    <Container>
      <button className={classe}>{text}</button>
    </Container>
  );
}
export default Button;

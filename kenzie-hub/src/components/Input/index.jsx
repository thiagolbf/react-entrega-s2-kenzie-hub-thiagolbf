import style from "./style";
import { Container, InputContainer } from "./style";

function Input({ label, name, register, error = "", ...rest }) {
  return (
    <Container>
      <div>
        {label}
        {!!error && <span> - {error}</span>}
      </div>

      <InputContainer>
        <input {...rest} {...register(name)} />
      </InputContainer>
    </Container>
  );
}

export default Input;

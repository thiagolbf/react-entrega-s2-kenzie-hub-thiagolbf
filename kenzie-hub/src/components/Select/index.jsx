import { Container, SelectContainer } from "./style";

function Select({ label, children, register, name, error, ...rest }) {
  return (
    <Container>
      <div>
        {label}
        {!!error && <span> - {error}</span>}
      </div>

      <SelectContainer>
        <select {...register(name)} {...rest}>
          {children}
        </select>
      </SelectContainer>
    </Container>
  );
}

export default Select;

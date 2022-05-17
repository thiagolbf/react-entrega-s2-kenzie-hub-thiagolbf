import { Container, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  function onFormSubmit(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        const { id } = res.data.user;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:id", JSON.stringify(id));
        toast.success("Login OK");
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  }

  return (
    <Container>
      <h1>Kenzie HUB</h1>
      <Content>
        <p>Login</p>

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />

          <Button classe={"secondColor"} text={"Entrar"} />
        </form>

        <span>Ainda não possui uma conta?</span>

        <Link to="/register">Cadastrar</Link>
      </Content>
    </Container>
  );
}

export default Login;

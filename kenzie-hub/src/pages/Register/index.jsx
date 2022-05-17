import { Container, Content, Header } from "./style";
import { useHistory } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useForm, useEffect } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Register({ authenticated }) {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onFormSubmit({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) {
    console.log("ola");

    const user = { email, password, name, bio, contact, course_module };
    api
      .post("/users", user)
      .then((_) => {
        console.log(_.data);
        toast.success("Cadastro ok");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email já cadastrado");
      });
  }
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Header>
        <p>kenzie hub</p>
        <Link to="/"> Voltar</Link>
      </Header>

      <Content>
        <p>Crie sua conta</p>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            type="password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
          />
          <Input
            label="bio"
            placeholder="bio"
            name="bio"
            register={register}
            error={errors.bio?.message}
          />
          <Input
            label="contact"
            placeholder="contact"
            name="contact"
            register={register}
            error={errors.contact?.message}
          />
          <Select
            label="Selecionar módulo"
            name="course_module"
            register={register}
            error={errors.course_module?.message}
          >
            <option value="">Selecione seu módulo</option>
            <option value="módulo 1">módulo 1</option>
            <option value="módulo 2">módulo 2</option>
            <option value="módulo 3">módulo 3</option>
            <option value="módulo 4">módulo 4</option>
          </Select>

          <Button classe="primaryColor" text="Cadastre-se" />
        </form>
      </Content>
    </Container>
  );
}

export default Register;

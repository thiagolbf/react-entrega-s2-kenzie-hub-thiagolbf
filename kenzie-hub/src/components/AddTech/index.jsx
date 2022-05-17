import { Container, TechRegister, HeadRegister } from "./style";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";

function AddTech({ id = "modalTech", setTechModalVisible, loadTechs }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  function handleOutsideClick(e) {
    if (e.target.id === id) {
      setTechModalVisible(false);
    }
  }

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onFormSubmit({ name, course_module }) {
    api
      .post(
        "/users/techs",
        {
          title: name,
          status: course_module,
        },
        {
          headers: {
            Authorization: `Beares ${token}`,
          },
        }
      )
      .then((res) => {
        loadTechs();
        setTechModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Alterar status do projeto:

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <HeadRegister>
        <p>Cadastrar Tecnologia </p>
        <button onClick={() => setTechModalVisible(false)}>x</button>
      </HeadRegister>
      <TechRegister>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o nome da tecnologia"
            register={register}
            error={errors.name?.message}
          />

          <Select
            label="Selecionar status"
            name="course_module"
            register={register}
            error={errors.course_module?.message}
          >
            <option value="">Selecione o status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <Button classe="primaryColor" text="Cadastrar Tecnologia" />
        </form>
      </TechRegister>
    </Container>
  );
}

export default AddTech;

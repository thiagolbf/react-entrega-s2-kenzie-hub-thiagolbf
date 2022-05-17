import { Container, HeadRegister, TechRegister, ButtonDiv } from "./style";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";

function UpdateTech({
  id = "modalTech",
  setUpdateModalVisible,
  loadTechs,
  techId,
  techTitle,
  techStatus,
}) {
  console.log(techId);
  console.log(techTitle);
  console.log(techStatus);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  function handleOutsideClick(e) {
    if (e.target.id === id) {
      setUpdateModalVisible(false);
    }
  }

  const schema = yup.object().shape({
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onFormSubmit({ course_module }) {
    api
      .put(
        `/users/techs/${techId}`,
        {
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
        setUpdateModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function apagando() {
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Beares ${token}`,
        },
      })
      .then((res) => {
        loadTechs();
        setUpdateModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("não apagou");
      });
  }

  //Alterar status do projeto:

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <HeadRegister>
        <p>Cadastrar Tecnologia</p>
        <button onClick={() => setUpdateModalVisible(false)}>x</button>
      </HeadRegister>
      <TechRegister>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            label="Nome"
            name="name"
            register={register}
            disabled="disabled"
            error={errors.name?.message}
            value={techTitle}
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

          <Button classe="primaryColor" text="Alterar Tecnologia" />
        </form>
        <button
          className="remove"
          onClick={() => {
            apagando();
          }}
        >
          {" "}
          Excluir{" "}
        </button>
      </TechRegister>
    </Container>
  );
}

export default UpdateTech;

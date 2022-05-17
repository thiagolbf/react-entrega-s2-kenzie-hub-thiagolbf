import { NavBar, Header, Container, MainContent, ApiDiv } from "./style";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import AddTech from "../../components/AddTech";
import UpdateTech from "../../components/UpdateTech";
import { Redirect } from "react-router-dom";

function Dashboard({ authenticated, setAuthenticated }) {
  const history = useHistory();
  const [techModalVisible, setTechModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [data, setData] = useState([]);
  const [showTechs, setShowTechs] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [id] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:id")) || ""
  );

  function logout() {
    localStorage.clear();
    setToken("");
    setCurrentUser([]);
    setAuthenticated(false);
    history.push("/");
  }

  function loadTechs() {
    api.get(`/users/${id}`).then((res) => {
      setShowTechs(res.data.techs);
      setCurrentUser(res.data);
    });
  }

  useEffect(() => {
    loadTechs();
  }, []);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  console.log(authenticated);
  return (
    <Container>
      <NavBar>
        <p>kenzie hub</p>
        <button
          onClick={() => {
            logout();
          }}
        >
          Voltar
        </button>
      </NavBar>
      <Header>
        <p>Olá, {currentUser.name}</p>
        <span>{currentUser.course_module}</span>
      </Header>
      <MainContent>
        <p>Tecnologias</p>
        <button onClick={() => setTechModalVisible(true)}>+</button>
        {techModalVisible ? (
          <AddTech
            setTechModalVisible={setTechModalVisible}
            loadTechs={loadTechs}
          />
        ) : null}
      </MainContent>
      <ApiDiv>
        {showTechs.map((value) => {
          return (
            <div key={value.id}>
              <div
                onClick={() => {
                  setUpdateModalVisible(true);
                  setData(value);
                }}
              >
                <span>{value.title}</span>
                <span>{value.status}</span>
              </div>
            </div>
          );
        })}
      </ApiDiv>
      {updateModalVisible ? (
        <UpdateTech
          techId={data.id}
          techTitle={data.title}
          techStatus={data.status}
          setUpdateModalVisible={setUpdateModalVisible}
          loadTechs={loadTechs}
        />
      ) : null}
    </Container>
  );
}

export default Dashboard;

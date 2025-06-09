import "./style.css";
import { ArchiveX } from "lucide-react";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map(
        (
          user //O React precisa de uma key, uma chave que nao se repita e no nosso caso e o id.
        ) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name} </span>
              </p>
              <p>
                Idade: <span> {user.age}</span>
              </p>
              <p>
                Email: <span> {user.email}</span>
              </p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <ArchiveX />
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Home;

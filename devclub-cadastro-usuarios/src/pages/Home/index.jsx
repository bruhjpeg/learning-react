import "./style.css";
import { ArchiveX } from "lucide-react";
import api from "../../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersFromSpi = await api.get("/usuarios");

    setUsers(usersFromSpi.data);
    console.log(users);
  }
  useEffect(() => {
    getUsers();
  });

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
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
            <button>
              <ArchiveX />
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Home;

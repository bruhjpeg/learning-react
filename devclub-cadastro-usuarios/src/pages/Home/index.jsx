import "./style.css";
import { ArchiveX } from "lucide-react";

function Home() {
  // RASCUNHO PARA TESTES
  const users = [
    {
      id: "2345",
      name: "Rodolfo",
      age: 33,
      email: "rod@email.com",
    },
    {
      id: "23456",
      name: "Aline",
      age: 25,
      email: "aline@email.com",
    },
    {
      id: "234567",
      name: "Bruna",
      age: 26,
      email: "bru@email.com",
    },
    {
      id: "2345678",
      name: "Paulo",
      age: 30,
      email: "paulo@email.com",
    },
  ];

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

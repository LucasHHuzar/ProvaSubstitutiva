import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno } from "../models/aluno";

function CadastrarAluno() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  function cadastrarAluno(e: any) {
    const aluno: Aluno = {
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5160/pages/aluno/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aluno),
    })
      .then((resposta) => resposta.json())
      .then((aluno: Aluno) => {
        navigate("/pages/aluno-listar");
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar Aluno</h1>
      <form onSubmit={cadastrarAluno}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite o Nome"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Sobrenome:</label>
        <input
          type="text"
          placeholder="Digite o Sobrenome"
          onChange={(e: any) => setSobrenome(e.target.value)}
        />
        <br />
        <label>CPF:</label>
        <input
          type="text"
          placeholder="Digite o CPF"
          onChange={(e: any) => setCpf(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarAluno;

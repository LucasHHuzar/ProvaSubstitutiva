import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno } from "../models/aluno";
import { Imc } from "../models/imc";

function CadastrarImc() {
  const navigate = useNavigate();
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [aluno, setAluno] = useState<Aluno[]>([]);
  const [alunoId, setAlunoId] = useState("");

  useEffect(() => {
    carregarAlunos();
  }, []);

  function carregarAlunos() {
    //FETCH ou AXIOS
    fetch("http://localhost:5160/pages/aluno/listar")
      .then((resposta) => resposta.json())
      .then((alunos: Aluno[]) => {
        setAluno(aluno);
      });
  }

  function cadastrarImc(e: any) {
    const imc: Imc = {
      altura: altura,
      peso: peso,
      alunoId: alunoId,
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5160/pages/imc/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imc),
    })
      .then((resposta) => resposta.json())
      .then((imc: Imc) => {
        navigate("/");
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar IMC</h1>
      <form onSubmit={cadastrarImc}>
        <label>Altura:</label>
        <input
          type="text"
          placeholder="Digite a altura"
          onChange={(e: any) => setAltura(e.target.value)}
          required
        />
        <br />
        <label>Peso:</label>
        <input
          type="text"
          placeholder="Digite o peso"
          onChange={(e: any) => setPeso(e.target.value)}
        />
        <br />
        <label>Alunos:</label>
        <select onChange={(e: any) => setAlunoId(e.target.value)}>
          {aluno.map((aluno) => (
            <option
              value={aluno.id}
              key={aluno.id}
            >
              {aluno.nome}
              {aluno.sobrenome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar IMC</button>
      </form>
    </div>
  );
}

export default CadastrarImc;

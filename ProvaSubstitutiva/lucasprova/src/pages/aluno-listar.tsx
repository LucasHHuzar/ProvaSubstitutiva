import { useEffect, useState } from "react";
import { Imc } from "../models/imc";
import { Aluno } from "../models/aluno";
import { Link } from "react-router-dom";

function ListarAluno() {
  const [aluno, setAluno] = useState<Aluno[]>([]);

  useEffect(() => {
    carregarAluno();
  }, []);

  function carregarAluno() {
    //FETCH ou AXIOS
    fetch("http://localhost:5160/pages/aluno/listar")
      .then((resposta) => resposta.json())
      .then((aluno: Aluno[]) => {
        console.table(aluno);
        setAluno(aluno);
      });
  }

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>IMCs</th>
          </tr>
        </thead>
        <tbody>
          {aluno.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.sobrenome}</td>
              <td>{aluno.cpf}</td>
              <td>
                 <Link to={`/pages/imc-listar-por-aluno/${aluno.id}`}>
                 IMCs
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarAluno;

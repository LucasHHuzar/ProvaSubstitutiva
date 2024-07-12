import { useEffect, useState } from "react";
import { Imc } from "../models/imc";
import { useNavigate, useParams } from "react-router-dom";

function ListarImcPorAluno() {
  const [imc, setImc] = useState<Imc[]>([]);

  const { id } = useParams();

  useEffect(() => {
    carregarImc();
  }, []);

  function carregarImc() {
    //FETCH ou AXIOS
    fetch(`http://localhost:5160/pages/imc/listarporaluno/${ id }`)
      .then((resposta) => resposta.json())
      .then((imc: Imc[]) => {
        console.table(imc);
        setImc(imc);
      });
  }

  return (
    <div>
      <h1>Listar IMC</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>IMC Real</th>
            <th>Classificação</th>
            <th>Grau de Obesidade</th>
            <th>Aluno ID</th>
          </tr>
        </thead>
        <tbody>
          {imc.map((imc) => (
            <tr key={imc.id}>
              <td>{imc.id}</td>
              <td>{imc.altura}</td>
              <td>{imc.peso}</td>
              <td>{imc.imcReal}</td>
              <td>{imc.classificacao}</td>
              <td>{imc.obesidadeGrau}</td>
              <td>{imc.alunoId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarImcPorAluno;
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CadastrarAluno from "./pages/aluno-cadastrar";
import CadastrarImc from "./pages/imc-cadastrar";
import ListarImc from "./pages/imc-listar";
import ListarAluno from "./pages/aluno-listar";


function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/aluno-cadastrar"}>
                  Cadastrar Aluno{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/aluno-listar"}>
                  Lista de Aluno{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/imc-cadastrar"}>
                  Cadastrar IMC{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/imc-listar"}>
                  Lista de IMC{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<CadastrarAluno />} />
            <Route
              path="/pages/aluno-cadastrar"
              element={<CadastrarAluno />}
            />
            <Route path="/" element={<ListarAluno />} />
            <Route
              path="/pages/aluno-listar"
              element={<ListarAluno />}
            />
            <Route path="/" element={<CadastrarImc />} />
            <Route
              path="/pages/imc-cadastrar"
              element={<CadastrarImc />}
            />
            <Route path="/" element={<ListarImc />} />
            <Route
              path="/pages/imc-listar"
              element={<ListarImc />}
            />
            
          </Routes>
          <footer>
            <p>Desenvolvido por Lucas Huzar Habinowski</p>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

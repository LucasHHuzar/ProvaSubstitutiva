import { Aluno } from "./aluno";

export interface Imc {
    id?: number;
    imcReal?: number;
    altura?: string;
    peso?: string;
    Aluno?: Aluno;
    alunoId?: string;
    classificacao?: string;
    obesidadeGrau?: string;
}
  
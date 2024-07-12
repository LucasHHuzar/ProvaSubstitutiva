namespace ProvaSubstitutiva.Models;

public class Imc
{
    public int Id { get; set; }
    public double ImcReal { get; set; }
    public double Altura { get; set; }
    public double Peso { get; set; }
    public string? Classificacao { get; set; }
    public int ObesidadeGrau { get; set; }
    public Aluno? Aluno { get; set; }
    public int? AlunoId { get; set; }
    
}

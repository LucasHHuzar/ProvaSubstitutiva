using ProvaSubstitutiva.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Diogo.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

//Configurar a política de CORS
builder.Services.AddCors(options =>
    options.AddPolicy("Acesso Total",
        configs => configs
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);

var app = builder.Build();

app.MapGet("/", () => "Prova Substitutiva!");

app.MapPost("/pages/aluno/cadastrar", ([FromBody] Aluno aluno,
    [FromServices] AppDataContext ctx) =>
{

    Aluno? alunoBuscado = ctx.Alunos.FirstOrDefault(x => x.Nome == aluno.Nome && x.Sobrenome == aluno.Sobrenome);
    if (alunoBuscado is not null)
    {
        return Results.BadRequest("Já existe um aluno com o mesmo nome!");
    }

    ctx.Alunos.Add(aluno);
    ctx.SaveChanges();
    return Results.Created("", aluno);
});

app.MapGet("/pages/aluno/listar", ([FromServices] AppDataContext ctx) =>
{
    return Results.Ok(ctx.Alunos.ToList());
});

app.MapPost("/pages/imc/cadastrar", ([FromBody] Imc imc,
    [FromServices] AppDataContext ctx) =>
{
    //Validar se o funcionário existe
    Aluno? aluno =
        ctx.Alunos.Find(imc.AlunoId);

    if (aluno is null)
        return Results.NotFound("Aluno não encontrado");

    imc.Aluno = aluno;

    //Calcular o ImcReal
    imc.ImcReal = imc.Peso / (imc.Altura * imc.Altura);

    //Atribuindo os valores do IMC
    if (imc.ImcReal < 18.5){

        imc.Classificacao = "Magreza";
        imc.ObesidadeGrau = 0;

    }
    else if (imc.ImcReal >= 18.5 && imc.ImcReal <= 24.9){

        imc.Classificacao = "Normal";
        imc.ObesidadeGrau = 0;

    }
    else if (imc.ImcReal >= 25.0 && imc.ImcReal <= 29.9){

        imc.Classificacao= "Sobrepeso";
        imc.ObesidadeGrau = 1;

    }
    else if (imc.ImcReal >= 30.0 && imc.ImcReal <= 39.9){
        
        imc.Classificacao = "Obesidade";
        imc.ObesidadeGrau = 2;
    
    }
    else{

        imc.Classificacao = "Obesidade Grave";
        imc.ObesidadeGrau = 3;

    }

    ctx.Imcs.Add(imc);
    ctx.SaveChanges();
    return Results.Created("", imc);
});

app.MapGet("/pages/imc/listar", ([FromServices] AppDataContext ctx) =>
{
    return Results.Ok(ctx.Imcs.ToList());
});

app.MapGet("/pages/imc/listarporaluno/{alunoId}", ([FromServices] AppDataContext ctx,
    [FromRoute] int alunoId) =>
{
    Imc? imc = ctx.Imcs.
        Include(x => x.Aluno).
        FirstOrDefault(a => a.Aluno.Id == alunoId);
    
    return Results.Ok(imc);
});

app.MapPut("/pages/imc/alterar/{id}",
    ([FromRoute] string id,
    [FromBody] Imc ImcAlterado,
    [FromServices] AppDataContext ctx) =>
{
    Imc? imc = ctx.Imcs.Find(id);
    if (imc is null)
    {
        return Results.
            NotFound("IMC não encontrado!");
    }
    imc.Altura = ImcAlterado.Altura;
    imc.Peso = ImcAlterado.Peso;
    imc.AlunoId = ImcAlterado.AlunoId;
    
    ctx.Imcs.Update(imc);
    ctx.SaveChanges();
    return Results.
        Ok("IMC alterado com sucesso!");
});

app.UseCors("Acesso Total");

app.Run();

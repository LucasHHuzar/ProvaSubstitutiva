﻿// <auto-generated />
using System;
using Diogo.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ProvaSubstitutiva.Migrations
{
    [DbContext(typeof(AppDataContext))]
    partial class AppDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.7");

            modelBuilder.Entity("ProvaSubstitutiva.Models.Aluno", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("Cpf")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<string>("Sobrenome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Alunos");
                });

            modelBuilder.Entity("ProvaSubstitutiva.Models.Imc", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("Altura")
                        .HasColumnType("REAL");

                    b.Property<int?>("AlunoId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Classificacao")
                        .HasColumnType("TEXT");

                    b.Property<double>("ImcReal")
                        .HasColumnType("REAL");

                    b.Property<int>("ObesidadeGrau")
                        .HasColumnType("INTEGER");

                    b.Property<double>("Peso")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("AlunoId");

                    b.ToTable("Imcs");
                });

            modelBuilder.Entity("ProvaSubstitutiva.Models.Imc", b =>
                {
                    b.HasOne("ProvaSubstitutiva.Models.Aluno", "Aluno")
                        .WithMany()
                        .HasForeignKey("AlunoId");

                    b.Navigation("Aluno");
                });
#pragma warning restore 612, 618
        }
    }
}

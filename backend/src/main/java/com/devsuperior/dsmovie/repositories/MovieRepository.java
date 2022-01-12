package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;
//RESPONSÁVEL POR BUSCAR OS FILMES NO BANCO DE DADOS
public interface MovieRepository extends JpaRepository<Movie, Long> {
//operações básicas (Buscar, Salvar, Deletar entre outros)
}

package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK_Primary_Key;
//RESPONSÁVEL POR BUSCAR OS FILMES NO BANCO DE DADOS
public interface ScoreRepository extends JpaRepository<Score, ScorePK_Primary_Key> {
//operações básicas (Buscar, Salvar, Deletar entre outros)
}

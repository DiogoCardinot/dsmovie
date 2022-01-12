package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;
//RESPONSÁVEL POR BUSCAR OS FILMES NO BANCO DE DADOS
public interface UserRepository extends JpaRepository<User, Long> {
//operações básicas (Buscar, Salvar, Deletar entre outros)
	//Busca por e-mail
	User findByEmail(String email);
}

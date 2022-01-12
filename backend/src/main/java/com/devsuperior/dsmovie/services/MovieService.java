package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable); // entidades(Movie)
		Page<MovieDTO> page= result.map(x -> new MovieDTO(x)); //a cada x é buscado as informações do card e no msm x é criado o MovieDTO com as informações
		return page;
	}
	
	//BUSCA POR ID
	@Transactional(readOnly = true)
	public MovieDTO findById (Long id) {
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}

}
//o Pageable permite que a busca no banco seja por páginas, no nosso caso, x filmes por página
package com.devsuperior.dsmovie.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//Tipo sempre começa com letra maiúscula
//CTRL + Shift + o  ele abre um painel pra instalação dos @ que não têm instalados e são necessários
@Entity
@Table(name = "tb_movie")

public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private Double score;
	private Integer count;
	private String image;
	
	@OneToMany(mappedBy="id.movie") //no score o atributo é id e no scorepk o atributo é movie, por isso id.movie
	//um filme pode ter várias avaliações (Um para muitos)
	private Set<Score> scores = new HashSet<>();
	//referência para o conjunto de avaliações desse filme, por isso está na entidade movie
	
	
	public Movie() {
	}
	//construtor que recebe os argumentos
	public Movie(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	} 
	
	//Métodos get e set dos atributos
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	//metodo de acesso a coleção de scores de um determinado filme
	public Set<Score> getScores() {
		return scores;
	}
	
	
	
	

}

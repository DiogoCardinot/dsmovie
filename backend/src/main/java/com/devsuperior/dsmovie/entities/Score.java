package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK_Primary_Key id = new ScorePK_Primary_Key(); //referência do movie e usuário
	//não dava pra chamar igual o value pois são duas primary keys(uma do filme e uma do usuário)
	private Double value;
	
	public Score() {
		
	}
	
	//associar o filme com o score
	public void setMovie(Movie movie) {
		id.setMovie(movie); //o id tá no scorePK que chama o setMovie e salva a referência no scorePK
		//basicamente está associando o id do score com o filme que é chamado pelo score pk
	}
	
	public void setUser(User user) {
		id.setUser(user); //vai no id no scorepk e salva a referência lá
	}

	public ScorePK_Primary_Key getId() {
		return id;
	}

	public void setId(ScorePK_Primary_Key id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
}

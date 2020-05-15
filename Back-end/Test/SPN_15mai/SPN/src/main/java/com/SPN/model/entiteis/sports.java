package com.SPN.model.entiteis;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class sports {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String image;
	@ManyToOne
	@JoinColumn(name="id_federation")
	private federations federation;

	@OneToMany(mappedBy ="sport")
	private List<criteres> list_criteres;
	
	@ManyToOne
	@JoinColumn(name="id_entity")
	private entities_sportifs clubs;
	
	public sports(int id, String nom, federations federation, entities_sportifs entities_sportifs,
			List<criteres> list_criteres,String image) {
		super();
		this.id = id;
		this.nom = nom;
		this.federation = federation;
		this.clubs = entities_sportifs;
		this.list_criteres = list_criteres;
		this.image= image;
	}
	public sports(String nom, federations federation) {
		super();
	
		this.nom = nom;
		this.federation = federation;

	}
	public sports() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	@JsonIgnore
	public federations getFederation() {
		return federation;
	}
	public void setFederation(federations federation) {
		this.federation = federation;
	}
	@JsonIgnore
	public List<criteres> getList_criteres() {
		return list_criteres;
	}
	public void setList_criteres(List<criteres> list_criteres) {
		this.list_criteres = list_criteres;
	}
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public void setClubs(entities_sportifs clubs) {
		this.clubs = clubs;
	}
	

	@Override
	public String toString() {
		return "sports [id=" + id + ", nom=" + nom + ", image=" + image + ", federation=" + federation
				+ ", list_criteres=" + list_criteres + ", clubs=" + clubs + "]";
	}

	
	

	
	
}

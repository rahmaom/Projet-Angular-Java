package com.SPN.model.entiteis;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class entities_sportifs extends Users{

	private String nom;
	private String type;
	
	//relations
	@OneToMany(mappedBy ="clubs")
	private List<sports> list_sport;
	@ManyToOne
	@JoinColumn(name="id_federation")
	private federations federation;
	public entities_sportifs( String nom, String type, List<sports> list_sport, federations federation) {
		super();
		this.nom = nom;
		this.type = type;
		this.list_sport = list_sport;
		this.federation = federation;
	}
	
	public entities_sportifs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
	public List<sports> getList_sport() {
		return list_sport;
	}

	public void setList_sport(List<sports> list_sport) {
		this.list_sport = list_sport;
	}

	@JsonIgnore
	public federations getFederation() {
		return federation;
	}
	public void setFederation(federations federation) {
		this.federation = federation;
	}

	@Override
	public String toString() {
		return "entities_sportifs [nom=" + nom + ", type=" + type + ", list_sport=" + list_sport + ", federation="
				+ federation + "]";
	}

	

	
	
}

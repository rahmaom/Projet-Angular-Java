package com.SPN.model.DAO;

import java.util.List;

import com.SPN.model.entiteis.Epreuve_competition;
import com.SPN.model.entiteis.epreuve;

public interface i_epreuveDAO {

    void  addathlet(epreuve epreuve,Epreuve_competition epreuve_competition);

	List<epreuve> getAll();

	epreuve getone(int id);

	void deleteone(int id);

}
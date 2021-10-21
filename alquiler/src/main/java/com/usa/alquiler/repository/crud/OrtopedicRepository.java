
package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Ortopedic;
import com.usa.alquiler.repository.OrtopediCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NELSON
 */
@Repository
public class OrtopedicRepository {
    
    @Autowired
    private OrtopediCrudRepository ortopediCrudRepository;

    public List<Ortopedic> getAll(){
        return (List<Ortopedic>) ortopediCrudRepository.findAll();
    }
    
    public Optional<Ortopedic> getOrtopedic(int id){
        return  ortopediCrudRepository.findById(id);
    }

    public Ortopedic save(Ortopedic ortopedic){
        return ortopediCrudRepository.save(ortopedic);
    }
    
    public void delete(Ortopedic ortopedic){
        ortopediCrudRepository.delete(ortopedic);
    }
    
}

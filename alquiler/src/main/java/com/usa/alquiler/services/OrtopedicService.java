
package com.usa.alquiler.services;

import com.usa.alquiler.entity.Ortopedic;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.usa.alquiler.repository.crud.OrtopedicRepository;

/**
 *
 * @author NELSON
 */
@Service
public class OrtopedicService {
    
    @Autowired
    private OrtopedicRepository ortopedicRepository;
    
    public List<Ortopedic> getAll(){
        //return (List<Ortopedic>) ortopedicRepository.findAll();
        return ortopedicRepository.getAll();
        
    }
    
    public Optional<Ortopedic> getOrtopedic(int idOrtopedic){
        return ortopedicRepository.getOrtopedic(idOrtopedic);
    }
    
    public Ortopedic save(Ortopedic ortopedic){
         if(ortopedic.getId() == null){
            return ortopedicRepository.save(ortopedic);
        }else{
            Optional<Ortopedic> ortop = ortopedicRepository.getOrtopedic(ortopedic.getId());
            //if(evt.isEmpty()){ //java 11?
            if(ortop.isPresent()){
                return ortopedic;
            }else{
                return ortopedicRepository.save(ortopedic);
            }
        
        }
    }
    
    public Ortopedic update(Ortopedic ortopedic){
        if(ortopedic.getId() != null){
            Optional<Ortopedic> ortop = ortopedicRepository.getOrtopedic(ortopedic.getId());
            if(ortop.isPresent()){
                if(ortopedic.getName() != null){
                    ortop.get().setName(ortopedic.getName());
                }
                if(ortopedic.getDescription()!= null){
                    ortop.get().setDescription(ortopedic.getDescription());
                }
                if(ortopedic.getBrand()!= null){
                    ortop.get().setBrand(ortopedic.getBrand());
                }
                if(ortopedic.getYear()!= null){
                    ortop.get().setYear(ortopedic.getYear());
                }
                if(ortopedic.getCategory()!= null){
                    ortop.get().setCategory(ortopedic.getCategory());
                }
                
                return ortopedicRepository.save(ortop.get());
            }
        }
        return ortopedic;

    }
    
    public boolean deleteOrtopedic(int id){
        Boolean del = getOrtopedic(id).map(ortopedic -> {
            ortopedicRepository.delete(ortopedic);
            return true;
        }).orElse(false);
        return del;
    }
    
}

 

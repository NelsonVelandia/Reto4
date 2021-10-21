
package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Score;
import com.usa.alquiler.repository.ScoreCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NELSON
 */
@Repository
public class ScoreRepository {
    @Autowired
    private ScoreCrudRepository scoreCrudRepository;

    public List<Score> getAllScore(){
        return (List<Score>) scoreCrudRepository.findAll();
    }
    
    public Optional<Score> getIdScore(int id){
        return  scoreCrudRepository.findById(id);
    }

    public Score save(Score score){
        return scoreCrudRepository.save(score);
    }
    
    public void delete(Score score){
        scoreCrudRepository.delete(score);
    }
}

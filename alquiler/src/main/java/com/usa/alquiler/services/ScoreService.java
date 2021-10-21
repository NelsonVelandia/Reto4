
package com.usa.alquiler.services;

import com.usa.alquiler.entity.Score;
import com.usa.alquiler.repository.crud.ScoreRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author NELSON
 */
@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;
    
    public List<Score> getAllScore(){
        return scoreRepository.getAllScore();
    }
    
    public Optional<Score> getIdScore(int idScore){
        return scoreRepository.getIdScore(idScore);
    }
    
    public Score save(Score score){
         if(score.getIdScore() == null){
            return scoreRepository.save(score);
        }else{
            Optional<Score> scor = scoreRepository.getIdScore(score.getIdScore());
            if(scor.isPresent()){
                return score;
            }else{
                return scoreRepository.save(score);
            }
        
        }
    }
    
    public Score update(Score score){
        if(score.getIdScore() != null){
            Optional<Score> sco = scoreRepository.getIdScore(score.getIdScore());
            if(sco.isPresent()){
                if(score.getMessageText() != null){
                    sco.get().setMessageText(score.getMessageText());
                }                
                if(score.getStars()!= null){
                    sco.get().setStars(score.getStars());
                }
                
                return scoreRepository.save(sco.get());
            }
        }
        return score;

    }
    
    public boolean deleteScore(int id){
        Optional<Score> cli = getIdScore(id);
        if(cli.isPresent()){
            scoreRepository.delete(cli.get());
            return true;
        }
        return false;

    }
}

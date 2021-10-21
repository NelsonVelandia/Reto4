
package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Message;
import com.usa.alquiler.repository.MessageCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NELSON
 */
@Repository
public class MessageRepository {
    
    @Autowired
    private MessageCrudRepository messageCrudRepository;

    public List<Message> getMessageAll(){
        return (List<Message>) messageCrudRepository.findAll();
    }
    
    public Optional<Message> getMessageId(int id){
        return  messageCrudRepository.findById(id);
    }

    public Message save(Message message){
        return messageCrudRepository.save(message);
    }
    
    public void delete(Message message){
        messageCrudRepository.delete(message);
    }
}

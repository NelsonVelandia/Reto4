
package com.usa.alquiler.services;

import com.usa.alquiler.entity.Message;
import com.usa.alquiler.repository.crud.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author NELSON
 */
@Service
public class MessageService {
    
    @Autowired
    private MessageRepository messageRepository;
    
    public List<Message> getMessageAll(){
        return messageRepository.getMessageAll();
        
    }
    
    public Optional<Message> getMessageId(int idMessage){
        return messageRepository.getMessageId(idMessage);
    }
    
    public Message save(Message message){
         if(message.getIdMessage() == null){
            return messageRepository.save(message);
        }else{
            Optional<Message> mess = messageRepository.getMessageId(message.getIdMessage());
            
            if(mess.isPresent()){
                return message;
            }else{
                return messageRepository.save(message);
            }
        
        }
    }
    
    public Message update(Message message){
        if(message.getIdMessage() != null){
            Optional<Message> mess = messageRepository.getMessageId(message.getIdMessage());
            if(mess.isPresent()){
                if(message.getMessageText() != null){
                    mess.get().setMessageText(message.getMessageText());
                }               
                return messageRepository.save(mess.get());
            }
        }
        return message;

    }
    
    public boolean deleteMessage(int id){
        Optional<Message> mess = getMessageId(id);
        if(mess.isPresent()){
            messageRepository.delete(mess.get());
            return true;
        }
        return false;

    }
}

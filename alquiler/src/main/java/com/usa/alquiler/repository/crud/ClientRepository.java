
package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Client;
import com.usa.alquiler.repository.ClientCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NELSON
 */
@Repository
public class ClientRepository {
    
    @Autowired
    private ClientCrudRepository clientCrudRepository;

    public List<Client> getAllClient(){
        return (List<Client>) clientCrudRepository.findAll();
    }
    
    public Optional<Client> getIdClient(int id){
        return  clientCrudRepository.findById(id);
    }

    public Client save(Client client){
        return clientCrudRepository.save(client);
    }
    
    public void delete(Client client){
        clientCrudRepository.delete(client);
    }
    
}

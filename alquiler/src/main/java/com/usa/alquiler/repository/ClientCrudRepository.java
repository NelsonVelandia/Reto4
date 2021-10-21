
package com.usa.alquiler.repository;

import com.usa.alquiler.entity.Client;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author NELSON
 */
public interface ClientCrudRepository extends CrudRepository<Client, Integer> {
    
}

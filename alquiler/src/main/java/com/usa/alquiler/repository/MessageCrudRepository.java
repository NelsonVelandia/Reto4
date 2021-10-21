
package com.usa.alquiler.repository;

import com.usa.alquiler.entity.Message;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author NELSON
 */
public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
    
}

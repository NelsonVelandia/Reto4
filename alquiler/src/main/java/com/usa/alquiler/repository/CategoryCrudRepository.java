
package com.usa.alquiler.repository;

import com.usa.alquiler.entity.Category;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author NELSON
 */
public interface CategoryCrudRepository extends CrudRepository<Category, Integer> {
    
}

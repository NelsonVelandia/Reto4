
package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Category;
import com.usa.alquiler.repository.CategoryCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NELSON
 */
@Repository
public class CategoryRepository {
    @Autowired
    private CategoryCrudRepository categoryCrudRepository;

    public List<Category> getAllCategory(){
        return (List<Category>) categoryCrudRepository.findAll();
    }
    
    public Optional<Category> getIdCategory(int id){
        return  categoryCrudRepository.findById(id);
    }

    public Category save(Category category){
        return categoryCrudRepository.save(category);
    }
    
    public void delete(Category category){
        categoryCrudRepository.delete(category);
    }
}

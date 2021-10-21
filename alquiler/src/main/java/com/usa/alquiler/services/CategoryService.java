
package com.usa.alquiler.services;

import com.usa.alquiler.entity.Category;
import com.usa.alquiler.repository.crud.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author NELSON
 */
@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    public List<Category> getAllCategory(){
        return categoryRepository.getAllCategory();
    }
    
    public Optional<Category> getIdCategory(int idCategory){
        return categoryRepository.getIdCategory(idCategory);
    }
    
    public Category save(Category category){
         if(category.getId() == null){
            return categoryRepository.save(category);
        }else{
            Optional<Category> categor = categoryRepository.getIdCategory(category.getId());
            if(categor.isPresent()){
                return category;
            }else{
                return categoryRepository.save(category);
            }
        
        }
    }
    
    public Category update(Category category){
        if(category.getId() != null){
            Optional<Category> categor = categoryRepository.getIdCategory(category.getId());
            if(categor.isPresent()){
                if(category.getName() != null){
                    categor.get().setName(category.getName());
                }
                if(category.getDescription()!= null){
                    categor.get().setDescription(category.getDescription());
                }
                
                return categoryRepository.save(categor.get());
            }
        }
        return category;

    }
    
    public boolean deleteCategory(int id){
        Boolean del = getIdCategory(id).map(category -> {
            categoryRepository.delete(category);
            return true;
        }).orElse(false);
        return del;
    }
    
}

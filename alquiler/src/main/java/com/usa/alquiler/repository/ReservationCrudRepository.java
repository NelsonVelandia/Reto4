
package com.usa.alquiler.repository;

import com.usa.alquiler.entity.Reservation;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author NELSON
 */
public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {
    
}


package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Reservation;
import com.usa.alquiler.repository.ReservationCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NELSON
 */
@Repository
public class ReservationRepository {
    
    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAllReservation(){
        return (List<Reservation>) reservationCrudRepository.findAll();
    }
    
    public Optional<Reservation> getIdReservation(int id){
        return  reservationCrudRepository.findById(id);
    }

    public Reservation save(Reservation reservation){
        return reservationCrudRepository.save(reservation);
    }
    
     public void delete(Reservation reservation){
        reservationCrudRepository.delete(reservation);
    }
}

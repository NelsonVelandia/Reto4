
package com.usa.alquiler.services;

import com.usa.alquiler.entity.Reservation;
import com.usa.alquiler.repository.crud.ReservationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author NELSON
 */
@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservationRepository;
    
    public List<Reservation> getAllReservation(){
        return reservationRepository.getAllReservation();
    }
    
    public Optional<Reservation> getIdReservation(int idReservation){
        return reservationRepository.getIdReservation(idReservation);
    }
    
    public Reservation save(Reservation reservation){
         if(reservation.getIdReservation() == null){
            return reservationRepository.save(reservation);
        }else{
            Optional<Reservation> reserva = reservationRepository.getIdReservation(reservation.getIdReservation());
            
            if(reserva.isPresent()){
                return reservation;
            }else{
                return reservationRepository.save(reservation);
            }
        
        }
    }
    
    public Reservation update(Reservation reservation){
        if(reservation.getIdReservation() != null){
            Optional<Reservation> reserv = reservationRepository.getIdReservation(reservation.getIdReservation());
            if(reserv.isPresent()){
                if(reservation.getStartDate() != null){
                    reserv.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getStartDate()!= null){
                    reserv.get().setDevolutionDate(reservation.getDevolutionDate());
                }                             
                return reservationRepository.save(reserv.get());
            }
        }
        return reservation;

    }
    
    public boolean deleteReservation(int id){
        Boolean del = getIdReservation(id).map(reservation -> {
            reservationRepository.delete(reservation);
            return true;
        }).orElse(false);
        return del;
    }
}

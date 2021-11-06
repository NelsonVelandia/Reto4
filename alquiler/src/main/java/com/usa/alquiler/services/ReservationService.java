
package com.usa.alquiler.services;

import com.usa.alquiler.entity.Reservation;
//import com.usa.alquiler.entity.Client;
import com.usa.alquiler.entity.custom.CountClients;
import com.usa.alquiler.entity.custom.DescriptionAmount;
import com.usa.alquiler.repository.crud.ReservationRepository;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
                if(reservation.getDevolutionDate() != null){
                    reserv.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getScore() != null){
                    reserv.get().setScore(reservation.getScore());
                }
                if(reservation.getClient() != null){
                    reserv.get().setClient(reservation.getClient());
                }
                if(reservation.getOrtopedic() != null){
                    reserv.get().setOrtopedic(reservation.getOrtopedic());
                }
                if(reservation.getStatus() != null){
                    reserv.get().setStatus(reservation.getStatus());
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
    
    public List<CountClients> getTopClients(){
        return reservationRepository.getTopClients();
    }
    
    public DescriptionAmount getStatusReport(){//getReservationsByClient
        List<Reservation> completed = reservationRepository.getReservationsByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationsByStatus("cancelled");

        DescriptionAmount status = new DescriptionAmount(completed.size(),cancelled.size());
        return status;
        //return new DescriptionAmount(completed.size(),cancelled.size());
    }
     
    public List<Reservation> getReservationPeriod(String d1, String d2){

        // yyyy-MM-dd
        SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");
        Date dateOne = new Date();
        Date dateTwo = new Date();
        try {
            dateOne=parser.parse(d1);
            dateTwo=parser.parse(d2);
        }catch (ParseException e) {
            e.printStackTrace();
        }
        if(dateOne.before(dateTwo)){
            return reservationRepository.getReservationsPeriod(dateOne,dateTwo);
        }else{
            return new ArrayList<>();//Esto si los formatos de Fecha estan mal.
        }
    } 
}

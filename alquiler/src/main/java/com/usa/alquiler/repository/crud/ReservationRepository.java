
package com.usa.alquiler.repository.crud;

import com.usa.alquiler.entity.Client;
import com.usa.alquiler.entity.Reservation;
import com.usa.alquiler.entity.custom.CountClients;
import com.usa.alquiler.repository.ReservationCrudRepository;
import java.util.ArrayList;
import java.util.Date;
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
    
    public List<Reservation> getReservationsByStatus(String status){
        return reservationCrudRepository.findAllByStatus(status);//findAllByClient
    }
    
    public List<Reservation> getReservationsPeriod(Date dateOne, Date dateTwo){
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(dateOne,dateTwo);
    }
    
    public List<CountClients> getTopClients(){
        List<CountClients> res = new ArrayList<>();
        List<Object[]> report = reservationCrudRepository.countTotalReservationByClient();
        for(int i=0;i<report.size();i++){
            /*
            Client clien = (Client) report.get(i)[0];
            Long cantidad=(Long) report.get(i)[1];
            CountClients cc=new CountClients(cantidad, clien);
            res.add(cc);
            */
            res.add(new CountClients((Long) report.get(i)[1],(Client)report.get(i)[0] ));
        }
        return res;
    }
}

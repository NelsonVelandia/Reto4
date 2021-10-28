
package com.usa.alquiler.repository;

import com.usa.alquiler.entity.Reservation;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author NELSON
 */
public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {
    
    //JPQL reservas por cliente
    @Query("select res.client, COUNT(res.client) from Reservation AS res group by res.client order by COUNT(res.client) desc")
    public List<Object[]> countTotalReservationByClient();

    //QUERY METHODS!  reservas entre dos fechas
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne,Date dateTwo);
    
    //Status Reservation cancelled and completed
    public List<Reservation> findAllByStatus(String status);
}

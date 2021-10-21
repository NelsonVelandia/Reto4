package com.usa.alquiler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = {"com.usa.alquiler.entity"})
@SpringBootApplication
public class AlquilerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlquilerApplication.class, args);
	}

}

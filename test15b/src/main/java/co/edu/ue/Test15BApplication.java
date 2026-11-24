package co.edu.ue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "co.edu.ue.entities")
@EnableJpaRepositories (basePackages = {"co.edu.ue.repository"})
@ComponentScan (basePackages = {"co.edu.ue.controller",
	"co.edu.ue.service",
	"co.edu.ue",
	"co.edu.ue.repository",
	"co.edu.ue.interfaces"})

public class Test15BApplication {

	public static void main(String[] args) {
		SpringApplication.run(Test15BApplication.class, args);
	}

}

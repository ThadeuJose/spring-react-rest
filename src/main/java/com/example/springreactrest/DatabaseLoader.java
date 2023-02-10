package com.example.springreactrest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.springreactrest.model.Employee;
import com.example.springreactrest.repository.EmployeeRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        repository.save(new Employee("Rachel", "Green", "rachel.green@email.com", "Marketing Manager"));
        repository.save(new Employee("John", "Doe", "john.doe@email.com", "Sales Representative"));
        repository.save(new Employee("Jennifer", "Anderson", "jennifer.anderson@email.com", "Human Resources Manager"));
        repository.save(new Employee("David", "Smith", "david.smith@email.com", "Software Engineer"));
        repository.save(new Employee("Jessica", "Brown", "jessica.brown@email.com", "Customer Service Representative"));
        repository.save(new Employee("Thomas", "Wilson", "thomas.wilson@email.com", "Project Manager"));
        repository.save(new Employee("Sarah", "Johnson", "sarah.johnson@email.com", "Business Analyst"));
        repository.save(new Employee("Michael", "Davis", "michael.davis@email.com", "Product Manager"));
        repository.save(new Employee("Emily", "Martinez", "emily.martinez@email.com", "Data Scientist"));
        repository.save(new Employee("Matthew", "Robinson", "matthew.robinson@email.com", "IT Manager"));
    }
}

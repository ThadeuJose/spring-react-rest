package com.example.springreactrest.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.springreactrest.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
import React from 'react';
import useEmployeesData from '../hook/useEmployeesData';

export default function EmployeesList() {
  const {isLoading, data, isError, error} = useEmployeesData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return data.map(elem => (
    <div key={elem.id}>
      {elem.firstName} {elem.lastName} {elem.role} {elem.email}
    </div>
  ));
}

function getHighestPaidEmployee(employees, departmentId) {
    const filteredEmployees = employees.filter(employee => employee.departmentId === departmentId);

  if (filteredEmployees.length === 0) {
    return undefined;
  }

  const highestPaidEmployee = filteredEmployees.reduce((previous, current) => {
    return previous.salary >= current.salary ? previous : current;
  });

  return highestPaidEmployee.name;
}

export { getHighestPaidEmployee };

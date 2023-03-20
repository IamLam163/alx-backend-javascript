export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [
      ...employees,
    ],
  };
}

/*
  * or
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {};
  employeesObject[departmentName] = employees;
  return employeesObject;
}
  */

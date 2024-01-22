// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with the updated value
    return {
      ...employee,
      [key]: value,
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object without the specified key
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  

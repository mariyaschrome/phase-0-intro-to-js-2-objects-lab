const employee = {
    "name": 'Hillary Marloy',
    "streetAddress": '456 westham',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    return {
        ...employee,
        [key]: value,
    };

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {

    employee[key] = value
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
   return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    let updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}


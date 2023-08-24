// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }});

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemp = { ...employee};
    newemp[key] = value;
    return newemp;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newemp = { ...employee};
    delete newemp[key];
    return newemp;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
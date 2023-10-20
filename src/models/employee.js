const dbConnect = require("../../config/db_config");

// Employee object create

let Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.organization = employee.organization;
  this.designation = employee.designation;
  this.salary = employee.salary;
  this.status = employee.status ? employee.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Employee.create = function (newEmp, result) {
  dbConnect.query("INSERT INTO employees set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Employee.findById = function (id, result) {
  dbConnect.query("SELECT * employees where id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
};

Employee.findAll = function (result) {
  dbConnect.query("SELECT * from employees", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees: ", res);
      result(null, res);
    }
  });
};

Employee.update = function (id, employee, result) {
  dbConnect.query(
    "UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=? WHERE id = ?",
    [
      employee.first_name,
      employee.last_name,
      employee.email,
      employee.phone,
      employee.organization,
      employee.designation,
      employee.salary,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Employee.delete = function (id, result) {
  dbConnect.query(
    "DELETE FROM employees WHERE id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Employee;

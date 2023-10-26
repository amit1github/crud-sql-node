const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee")

// @route Retrieve all employees
router.get("/", employeeController.findAll);

// @route Create new employee
router.post("/", employeeController.create);

// @route Retrieve a Single employee with ID
router.get("/:id", employeeController.findById);

// @route Update a employee with ID
router.put("/:id", employeeController.update)

// @route Delete a employee with ID
router.delete("/:id", employeeController.delete)

module.exports = router;
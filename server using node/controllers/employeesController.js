const Employee = require("../models/Employee");

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees.length) {
    return res.status(404).json({ message: "No employees found." });
  }
  res.json(employees);
};

const newEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) {
    return res.status(400).json({
      message: "First and last names are required.",
    });
  }

  try {
    const result = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({
      message: "Employee ID is required.",
    });
  }

  const employee = await Employee.findOne({ _id: req.body.id });
  if (!employee) {
    return res
      .status(404)
      .json({ message: `No employee matches ID ${req.body.id}.` });
  }

  if (req?.body?.firstname) employee.firstname = req.body.firstname;
  if (req?.body?.lastname) employee.lastname = req.body.lastname;

  const result = await employee.save();
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "Employee ID is required." });
  }

  const employee = await Employee.findOne({ _id: req.body.id });
  if (!employee) {
    return res
      .status(404)
      .json({ message: `No employee matches ID ${req.body.id}.` });
  }

  const result = await Employee.deleteOne({ _id: req.body.id }).exec();
  res.json(result);
};

const getEmployee = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "Employee ID is required." });
  }

  const employee = await Employee.findOne({ _id: req.params.id });
  if (!employee) {
    return res
      .status(404)
      .json({ message: `No employee matches ID ${req.params.id}.` });
  }

  res.json(employee);
};

module.exports = {
  getAllEmployees,
  newEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};

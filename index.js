import express from "express";
import db from "./config/database.js"; 
import Computer from "./model/computer.js";
import Departement from "./model/departement.js";
import DeptProj from "./model/deptproj.js";
import Project from "./model/project.js";
import User from "./model/user.js";

const app = express(); 

try {
  await db.authenticate();
  console.log("Database connected");
  Computer.sync();
  User.sync();
  Departement.sync();
  Project.sync();
  DeptProj.sync();
} catch (err) { 
  console.error(err);
}

app.listen(5000, () => console.log('Server Up and Running...'));
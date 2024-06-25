import { loginAdmin, registerAdmin } from "../controllers/adminController.js";
import express from 'express';


const adminRoute = express.Router();

adminRoute.post("/login",loginAdmin);
adminRoute.post("/register",registerAdmin);

export default adminRoute;
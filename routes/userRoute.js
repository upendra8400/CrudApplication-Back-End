import express from "express";
import {
    DeleteUserData,
    UpdateUserData,
  create,
  getAllData,
  getUserDataById,
} from "../controller/userController.js";

const route = express.Router();

route.get("/getAll", getAllData);
route.get("/getUser/:id", getUserDataById);
route.post("/create", create);
route.put("/updateUser/:id", UpdateUserData);
route.delete("/deleteUser/:id", DeleteUserData);

export default route;

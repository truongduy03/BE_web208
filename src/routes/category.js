import express from "express";
import { getAll, get, create, updatePatch, remove } from "../controllers/category";


const routerCategory = express.Router();

routerCategory.get("/", getAll); 
routerCategory.get("/:id", get); 
routerCategory.post("/", create); 
routerCategory.patch("/:id", updatePatch); 
routerCategory.delete("/:id", remove); 

export default routerCategory;

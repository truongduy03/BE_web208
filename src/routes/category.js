import express from "express";
import { getAll, get, create, updatePatch, remove } from "../controllers/category";


const routerCategory = express.Router();

routerCategory.get("/", getAll); 
routerCategory.get("/:_id", get); 
routerCategory.post("/", create); 
routerCategory.put("/:_id", updatePatch); // -> patch
routerCategory.delete("/:_id", remove); 

export default routerCategory;

import express from 'express'
import { signUp } from '../controllers/auth.js';


const routerAuth = express.Router();

routerAuth.post('/signup', signUp)

export default routerAuth
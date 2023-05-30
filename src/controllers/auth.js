import User from "../models/user.js";
import { signinSchema, signupSchema } from '../validation/user.js';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = signupSchema.validate(req.body)

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const checkEmail = await User.findOne({ email })
        if (checkEmail) {
            return res.status(400).json({
                message: "Email đã tồn tại"
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 15)
        const user = await User.create({
            ...req.body,
            password: hashedPassword
        });
        user.password = undefined
        return res.status(200).json({
            message: "Đăng kí thành công",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: "lỗi server"
        })
    }
}
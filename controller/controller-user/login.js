import { passport } from "../../database/DBinit.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req,res) => {
    try{
        // check username and password is provided
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password){
            return res.status(404).json({
                message: "username and password cannot empty"
            })
        };

        // check username exist or not
        const query = `
            SELECT * FROM users WHERE username = $1
        `;

        const db = await passport.query(query, [username]); 
        const users = db.rows[0];
        console.log(users);

        // kenapa users falsy ? sebab DB tak jumpa query yg kita nak kalau username salah
        if(!users){
            return res.status(404).json({
                message: "username not exist",
                result: users
            })
        };

        // check password correct or not
        const checkPwd = bcrypt.compareSync(password, users.password);
        if(!checkPwd){
            return res.status(404).json({
                message: "wrong password"
            })
        };

        // after user login, we need to create token
        const data = {
            id: users.id,
            username: users.username,
        };

        const secretKey = "mencuba";

        const token = jwt.sign(data, secretKey);

        res.status(200).json({
            message: "login success",
            token: token
        })

    } catch(err){
        res.status(500).json({
            message: "cannot login"
        })
        console.log("cannot login")
    }
}
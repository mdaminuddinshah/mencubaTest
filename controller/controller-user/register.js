import { passport } from "../../database/DBinit.js";
import bcrypt from "bcrypt";

const query = `
    INSERT INTO users(email, username, password)
    VALUES($1, $2, $3) RETURNING *
`;

export const registeredUser = async (req,res) => {
    try{

        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        // check email and username and password is provided
        if(!email || !username || !password){
            return res.status(404).json({
                message: "email, username, password cannot empty"
            })
        }

        // change password tu hash
        const saltRounds = 12;
        const passHash = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, passHash);

        const details = await passport.query(query, [email, username, hashedPassword]);
        res.status(201).json({
            message: "success register user",
            welcome: 'welcome, ' + details.rows[0].username
        })

        console.log("success register user");
    } catch(err){
        res.status(500).json({
            message: "failed register"
        })
        console.log("failed register user");
    }
}

import { passport } from "../../database/DBinit.js";

export const createtweet = async (req,res) => {
    try{

        const text = req.body.text;
        const id = req.id;

        const query = `
            INSERT INTO tweet(text, user_id)
            VALUES($1, $2)
        `;

        await passport.query(query, [text, id]);
        res.status(200).json({
            message: "success create"
        })
        console.log("success create")

    } catch(err){
        console.log("cannot create tweet")
    }
}
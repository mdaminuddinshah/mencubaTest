import { passport } from "../../database/DBinit.js";

const query = `
    SELECT * FROM tweet WHERE user_id = $1
`;

const readTweet = async (req,res) => {
    try{
        const id = req.id;

        const details = await passport.query(query, [id]);
        const data = details.rows;

        console.log(details);
        res.status(200).json({
            message: "success read tweet",
            tweets: data
        });

    } catch(err){
        res.status(200).json({
            message: "cannot read tweet"
        });

        console.log("cannot read tweet")
    }
}

export default readTweet;
import { passport } from "../../database/DBinit.js";

const query = `
    DELETE FROM users WHERE id = $1
`;

export const deleteUser = async (req,res) => {
    try{
        const id = req.params.id;

        await passport.query(query, [id]);
        res.status(200).json({
            message: "id deleted"
        })
        console.log("id deleted")
    } catch(err){
        res.status(404).json({
            message: "id cannot delete"
        })
        console.log("id cannot delete");
    }
}
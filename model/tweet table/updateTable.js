import { passport } from "../../database/DBinit.js";

const query = `
    ALTER TABLE tweet
    ADD COLUMN user_id INTEGER REFERENCES users(id)
`;

const updateTable = async () => {
    try{
        await passport.query(query);
        console.log("table updated")
    } catch(err){
        console.log("table cannot update")
    }
};

export default updateTable;
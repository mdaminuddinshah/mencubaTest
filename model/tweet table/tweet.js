import { passport } from "../../database/DBinit.js";

const query = `
    CREATE TABLE IF NOT EXISTS tweet(
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )
`;

const tableTweet = async () => {
    try{
        await passport.query(query);
        console.log("success create table tweet")
    } catch(err){
        console.log("table failed")
    }
};

export default tableTweet;
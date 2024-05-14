import { passport } from "../../database/DBinit.js";

const query = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )
`;

const tableUser = async () => {
    try{
        await passport.query(query);
        console.log("success create table user");
    } catch(err){
        console.log("cannot create table user");    
    }
}

export default tableUser;
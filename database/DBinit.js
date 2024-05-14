import pg from "pg";
import "dotenv/config";
import tableTweet from "../model/tweet table/tweet.js";
import tableUser from "../model/user table/user.js";
import updateTable from "../model/tweet table/updateTable.js";

const { Pool } = pg;

export const passport = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    max: 20,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 2000
});

export const DatabaseConnection = async () => {
    try{
        await passport.query("SELECT NOW()");
        console.log("DB CONNECTED")

        tableTweet();
        tableUser();
        updateTable();
    }catch(err){
        console.log("DB FAILED")
    }
};
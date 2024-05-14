import express from "express";
import { pageNotFound } from "./controller/getHealth.js";
import { getHealth } from "./controller/getHealth.js"; 
import { DatabaseConnection } from "./database/DBinit.js";
import { registeredUser } from "./controller/controller-user/register.js";
import { loginUser } from "./controller/controller-user/login.js";
import { auth } from "./middleware/authenticate.js";
import { createtweet } from "./controller/controller-tweet/create.js";
import { deleteUser } from "./controller/controller-user/delete.js";
import readTweet from "./controller/controller-tweet/read.js";

const app  = express();
const PORT = 1002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

DatabaseConnection();

// check health
app.get("/health", getHealth);

// register
app.post("/register", registeredUser);

// login
app.get("/login", loginUser);

// create tweet
app.post("/tweet", auth, createtweet);

// delete user
app.delete("/delete/:id", deleteUser);

// read twett
app.get("/readTweet", auth, readTweet);

app.use(pageNotFound);

app.listen(PORT);
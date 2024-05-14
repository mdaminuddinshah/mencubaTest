<!-- cara upload text ke database -->
1. npm i express
2. create index.js
3. create controller and create gethealth.js to check connection
4. create database folder and create DB file
5. create model folder and create table for user and tweet e.g.
6. create user controller for insert data in user table
7. create register file under user folder
    - check email, password, username provided
    - change password using bcrypt, const pwd = bcrypt.genSaltSync(saltRounds), bcrypt.hashSync(password, pwd)
8. create login file under user folder
    - check username, password provided
    - check username exist or not
    - check password to compare using bcrypt.compareSync(pwd, users.password)
    - create token, using jsonwebtoken, npm i jsonwebtoken
        - jwt.sign(data, secretkey), data tu dalam object, secretkey dlm string
9. create middleware folder and create auth file
    - request bearer token using, req.headers.authorization
    - check token is fill or not
    - check token valid or not using jwt.verify(token, secretkey, (err, decoded) => {if(err){res.status(404)...}})
    - jgn lupa req,res,next
    - bawah sekali, kita buat req.id = decoded.id, req.username = decoded.username, next();
10. create create.js file under tweet folder
    - add req.id dari middleware e.g. const id = req.id
    - buat macam biasa query DB and pool.query
11. kat index.js app.post("/create", auth, createTweet); tambah middleware di tengah tu

    
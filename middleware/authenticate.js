import jwt from "jsonwebtoken";

export const auth = (req,res,next) => {
    

        // ini utk kita request token, default sekali dgn Bearer ..token..
        const bearerToken = req.headers.authorization;
        console.log(bearerToken);

        // check token is on
        if(!bearerToken){
            return res.status(404).json({
                message: "token is off"
            })
        };

        
        const token = bearerToken.split(" ")[1];

        if(!token){
            return res.status(404).json({
                message: "token cannot empty"
            })
        };

        // check token is valid
        const secretKey = "mencuba";

        jwt.verify(token, secretKey, (err, decoded) => {
            if(err){
                return res.status(404).json({
                    message: "invalid token"
                })
            }

            // yg ini kita pass ke controller create.js
            req.id = decoded.id;
            req.username = decoded.username;
            next();
        })

}
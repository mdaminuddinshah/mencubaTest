export const getHealth = (req,res) => {
    try{
        res.send("Mencuba Test");
        res.status(200);
        console.log("mencubaTest")
    } catch(err){
        res.send("error")
        res.status(404);
        console.log("failed")
    }
}

export const pageNotFound = (req,res) => {
    try{
        res.status(404);
        res.send("page not found");
        console.log("page not found")
    } catch(err){
        res.status(500);
        res.send("something went wrong");
        console.log("something went wrong");
    }
}

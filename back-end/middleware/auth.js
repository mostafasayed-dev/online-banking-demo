const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "");
        // console.log("token", token)
        const decoded = await jwt.verify(token, "secret_this_should_be_longer");
        // console.log("decode", decoded)
        const user = await User.findOne({_id: decoded.userId});
        // console.log(user)
        if(!user){
            throw new Error();
        }
        // console.log("authenticated");
        req.user = user;
        next();
    }catch(ex){
        res.status(401).send({error: "authentication failed!"})
    }
}

module.exports = auth
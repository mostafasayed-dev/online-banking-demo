const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try{
        //to do
    }catch(ex){
        res.status(401).send({error: "authentication failed!"})
    }
}

module.exports = auth
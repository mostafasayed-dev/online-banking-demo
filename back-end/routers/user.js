const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const router = express.Router()

router.post("", async (req, res) => {
    const user = new User({
        ...req.body
    })

    try{
        await user.save()
        res.status(201).send(user)
    }catch(ex){
        res.status(400).send(ex)
    }
})

router.post("/login", async (req, res) => {
    try{
        //console.log(req.body)
        const user = await User.findOne({username: req.body.username})
        if(!user){
            return res.status(401).send({message: "authentication failed, invalid username!"})
        }else{
            if(user.status != 'active'){
                return res.status(401).send({message: "authentication failed, user status not active!"})
            }
        }

        const isMatched = await bcrypt.compare(req.body.password, user.password);
        if(!isMatched){
            return res.status(401).send({message: "authentication failed, invalid password!"})
        }

        const token = jwt.sign({
            userId: user._id,
        }, "secret_this_should_be_longer", {expiresIn: "1h"})
        // 1h => 3600s
        res.status(200).send({
            token: token,
            expiresIn: 43200,//12h
            _id: user._id,
            rim_no: user.rim_no
        })
    }catch(ex){
        res.status(400).send(ex)
    }
})

module.exports = router
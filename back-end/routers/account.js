const express = require('express')
const auth = require('../middleware/auth')
const Account = require('../models/account')

const router = express.Router()

router.post("", async (req, res) => {
    const account = new Account({
        ...req.body
    })

    try{
        await account.save()
        res.status(201).send(account)
    }catch(ex){
        res.status(400).send(ex)
    }
})

router.get("/:rim_no", auth, async (req, res) => {
    try{
        const pageSize = +req.query.pagesize;
        const currentPage = +req.query.page;
        const count = await Account.countDocuments({rim_no: req.params.rim_no});
        const accounts = await Account.find({rim_no: req.params.rim_no})
                                      .skip(pageSize * (currentPage - 1))
                                      .limit(pageSize)
        
        // console.log(count)
        if(accounts){
            res.status(200).send({accounts, count})
            // setTimeout(() => {
            //     res.status(200).send(accounts)
            // }, 5000);
        }else{
            res.status(404).send({error: "accounts not found"})
        }
        
    }catch(ex){
        res.status(400).send(ex)
    }
})

module.exports = router
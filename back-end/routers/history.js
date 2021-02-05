const express = require('express');
const auth = require('../middleware/auth');
const History = require('../models/history');

const router = express.Router();

router.get('', auth, async (req, res) => {
    try{
        const pageSize = +req.query.pagesize;
        const currentPage = +req.query.page;
        const count = await History.countDocuments();
        const history = await History.find()
                                     .skip(pageSize * (currentPage - 1))
                                     .limit(pageSize)
                                     .sort({createdAt: -1})// desc order
        if(history){
            res.status(200).send({history, count});
        }
        else{
            res.status(404).send('History not found!');
        }
    }
    catch(ex){
        res.status(400).send(ex);
    }
})

router.get('/:account_no', auth, async (req, res) => {
    try{
        const pageSize = +req.query.pagesize;
        const currentPage = +req.query.page;
        const count = await History.countDocuments({
                                        $or: [ // from_account or to_account
                                        { from_account:  req.params.account_no },
                                        { to_account: req.params.account_no }
                                        ]
                                    });
        const history = await History.find({
                                        $or: [ // from_account or to_account
                                        { from_account:  req.params.account_no },
                                        { to_account: req.params.account_no }
                                        ]
                                    })
                                     .skip(pageSize * (currentPage - 1))
                                     .limit(pageSize)
                                     .sort({createdAt: -1})// desc order
        if(history){
            res.status(200).send({history, count});
        }
        else{
            res.status(404).send('History not found!');
        }
    }
    catch(ex){
        res.status(400).send(ex);
    }
})

router.get('/reference/:referenceNumber', auth, async(req, res) => {
    try{
        const history = await History.findOne({reference_number: req.params.referenceNumber})
        if(history){
            res.status(200).send(history.reference_number)
        }
        else{
            res.status(404).send('History not found!');
        }
    }
    catch(ex){
        res.status(400).send(ex);
    }
})

module.exports = router;
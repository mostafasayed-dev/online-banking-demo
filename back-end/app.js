const express = require('express');
const mongoose = require('mongoose');
const rimRouter = require('./routers/rim');
const acctRouter = require('./routers/account');
const userRouter = require('./routers/user');
const transferRouter = require('./routers/transfer');
const ratesRouter = require('./routers/rates');
const historyRouter = require('./routers/history');

const app = express()

mongoose.connect(process.env.MONGODB_URI
                || 'mongodb+srv://mostafa:hIeJG6rXzsRoY69h@cluster0.kor3k.mongodb.net/online-banking-demo', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
}).then((result) => {
    console.log('online banking demo back-end connected to online-banking-demo database successfully.');
}).catch((error) => {
    console.log(error);
})

app.use((req,res,next)=>{
    //it's allowed to access resources for any app in any domain
    res.setHeader("Access-Control-Allow-Origin","*");
    //domain sending requests with a specific set of headers,
    //the incoming request may have these extra headers(not must)
    //if request has another headers wich is not defined here, access will be blocked
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, authorization");
    //the allowed methods(http verbs), 
    //OPTIONS is implicit request sent by browser by default(eg. check whether a POST request is valid).
    res.setHeader("Access-Control-Allow-Methods",
        "POST, GET, DELETE, PATCH, PUT, OPTIONS ");
    next();
})

app.use(express.json());
app.use("/api/rims", rimRouter);
app.use("/api/accounts", acctRouter);
app.use("/api/users", userRouter);
app.use("/api/transfers", transferRouter);
app.use("/api/rates", ratesRouter);
app.use('/api/history', historyRouter);

const frontendDir = __dirname + "/angular-app/";
app.use(express.static(frontendDir));

module.exports = app;
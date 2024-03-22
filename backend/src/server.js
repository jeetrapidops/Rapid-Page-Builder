import express from "express";
import dotenv from "dotenv";
import connectDb from './db/connectDb.js';
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import pageRoute from './routes/pageRoute.js'
import "./middleware/cronScheduler.js"

dotenv.config({
    path: "./env"
})
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("backend")
})

app.use("/api/v1/auth",authRoute);
app.use("/api/v1/page",pageRoute);


connectDb().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("server running at " + process.env.PORT);
    })
})





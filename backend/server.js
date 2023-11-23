const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connect= require("./config/db/connect");
const userRoute = require("./routes/users");
const morgan = require('morgan');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use(morgan("dev")); 
app.use("/api/v1/auth",userRoute);



const start=async ()=>{
    try {
        await connect(process.env.MONGO_URL)
        app.listen(process.env.PORT,console.log(`Server is listening at port ${process.env.PORT || 3001}`))
        
    } catch (error) {
        console.log(error);
        
    }
}
start();
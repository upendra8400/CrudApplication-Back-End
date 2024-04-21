import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoute.js"

const app = express();

app.use(bodyParser.json());
app.use(cors())
dotenv.config();

const PORT = process.env.port || 7000;
const MONGOURL = process.env.MONGO_URL;


mongoose.connect(MONGOURL)
    .then(() => console.log("Database is Connected Successfully.."))
    .catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
})


app.use("/api",route)
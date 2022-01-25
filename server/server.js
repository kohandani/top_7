import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

import PostRoutes from "./routes/Posts.js";
import UserRoutes from "./routes/Users.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/posts", PostRoutes);
app.use("/api/v1/users", UserRoutes);

app.get('/',(req,res)=>{
    res.send('hello guys')
})

// errorHandling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.CONNECTION_MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`server is running on port :${PORT}`)
        )
    )
    .catch((error) => console.log(error));

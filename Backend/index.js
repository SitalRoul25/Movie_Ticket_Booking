const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const corsOptions = {
    origin: "http://localhost:4200"
};

// Connect to DB
try {
    mongoose.connect(
        process.env.DB_CONNECT, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        () => {
            console.log("DataBase Connection Established...");
        });
} catch (error) {
    console.log("Database Connection failed!!!!!!!");

}

// mongoose.connect(process.env.DB_CONNECT, { 
//     useUnifiedTopology: true, 
//     useNewUrlParser: true
//     }.then(() => {
//         console.log("Connected to Mongo DB ...");
//     }).catch(() => {
//         console.log("Connection failed");
//     }));


const port = process.env.PORT || 3500;

// Import router
const movieRouter = require('./routes/listing');
const userRouter = require('./routes/user');


// Middleware
app.use(express.json());
app.use(cors());
app.use(cors(corsOptions));

// route Middleware
app.use("/api/movies", movieRouter);
app.use("/api/users", userRouter);
app.listen(port, () => {
    console.log('Server is Up & Running.', port);
});
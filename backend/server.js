import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js';
import userRoutes from './routes/userRoute.js';
import connectDB from './db/connectToMongoDB.js';
dotenv.config(); // to access the env variables


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming request with JSON payloads eg: POST request
app.use(cookieParser()); // to parse the incoming cookies from the request
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

 app.get('/', (req, res) => {
    res.send('Hello world');
 });

 
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`
)
});
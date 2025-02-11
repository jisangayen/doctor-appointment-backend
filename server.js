import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();  
connectCloudinary();

// middlewarea

app.use(express.json());
app.use(cors());


//api end point

app.use('/api/admin', adminRouter) 
app.use('/api/doctor', doctorRouter) 
app.use('/api/user', userRouter) 



//api call
app.get("/", (req, res) => {
  res.send("Server working on Local host");
});

//port listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

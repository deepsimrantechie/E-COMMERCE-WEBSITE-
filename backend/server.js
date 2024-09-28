/*import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

//app  config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLE WARES
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("api working ");
});

app.listen(port, () => console.log("server started on port :" + port));
*/
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARES
app.use(express.json()); // Ensure this is included to handle JSON
app.use(cors());

// API endpoints
app.use("/api/user", userRouter); // Mount the userRouter
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server started on port: " + port));

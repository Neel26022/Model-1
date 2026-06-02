import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./connectDB.js";

const app = express();
app.use(cors());
app.use(
  cors({
    origin:
      "https://didactic-goggles-v4r49xx9pr7369wr-5174.app.github.dev",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 8080;

connectDB();

app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.post("/signup", async (req, res) => {
    try {
        const user = req.body;

        console.log(user);

        const newUser = new User({
            username,
            email,
            password,
        });

    await newUser.save();

        res.status(201).json({
            success: true,
            message: "User data received successfully",
            user,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
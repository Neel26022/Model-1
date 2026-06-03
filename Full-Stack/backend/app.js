import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./connectDB.js";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/user.js";

const app = express();

// ES Module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin:
      "https://didactic-goggles-v4r49xx9pr7369wr-3000.app.github.dev",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Static folders
const staticPathForWebsite = path.join(
  __dirname,
  "public",
  "website"
);

const staticPathForHTML = path.join(
  __dirname,
  "public",
  "html"
);
const staticPathForTable = path.join(
  __dirname,
  "public",
  "table"
);
const staticPathForAudio = path.join(
  __dirname,
  "public",
  "audio"
);
const staticPathForLayout = path.join(
  __dirname,
  "public",
  "layout"
);
const staticPathForRegister = path.join(
  __dirname,
  "public",
  "register"
);

app.use("/website", express.static(staticPathForWebsite));
app.use("/html", express.static(staticPathForHTML));

// Database
connectDB();

const PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
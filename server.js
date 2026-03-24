import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = 3000;

// Serve static files (your frontend)
app.use(express.static("."));

// Firebase config endpoint
app.get("/config", (req, res) => {
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
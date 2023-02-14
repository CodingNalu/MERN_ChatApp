const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authRoute");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.status(200).json({ messsage: "Succces, Now Enjoy!." });
});

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(501).json({ error: error });
});

app.listen(PORT, () => {
  console.log(`App is running on PORT=${PORT}`);
});

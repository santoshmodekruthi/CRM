const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://santoshmodekruthi:santosh.1234@cluster0.jn3zvhj.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/leads", require("./routes/Leads"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
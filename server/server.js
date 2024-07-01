const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to hiker application." });
  res.status(200).send("The API is working")
  
});

require("./routes/tutorial.routes")(app);

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

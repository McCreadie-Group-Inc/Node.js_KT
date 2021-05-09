const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use("/", express.static("build"));

app.get("/hw", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT} `);
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let wishes = [];

app.get("/wishes", (req, res) => {
  res.json(wishes);
});

app.post("/wishes", (req, res) => {
  const wish = {
    text: req.body.text,
    timestamp: new Date().toLocaleString()
  };
  wishes.push(wish);
  res.json(wish);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✨ Wish Book server running on port ${PORT}`);
});

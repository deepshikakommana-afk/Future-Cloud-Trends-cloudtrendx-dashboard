const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const trends = [
  {
    id: 1,
    name: "AI Cloud Services",
    growth: 85,
  },
  {
    id: 2,
    name: "Edge Computing",
    growth: 72,
  },
  {
    id: 3,
    name: "Green Cloud",
    growth: 66,
  },
  {
    id: 4,
    name: "Hybrid Cloud",
    growth: 91,
  },
];

app.get("/api/trends", (req, res) => {
  res.json(trends);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
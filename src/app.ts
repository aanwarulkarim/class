import Express from "express";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from api");
});

app.listen(port, () => {
  console.log(`hello from, expresa ${port}`);
});

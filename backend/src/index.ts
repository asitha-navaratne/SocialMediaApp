import express, { Response } from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (res: Response) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

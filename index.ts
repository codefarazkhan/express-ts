import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  const name = typeof req.query.name === 'string' ? req.query.name : 'World';
  console.log(`Received request with name: ${name}`);
  let test:Number = 123;
  test = 345;
  console.log(`Test variable: ${test}`);
  res.send("Hello from TypeScript + Express aa!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

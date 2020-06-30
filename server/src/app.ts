import express, { json } from "express";
import Router from "./Router";

const app = express();
const port = 3000;
app.use(json());
app.use(Router);

try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
} catch (err) {
  console.log(err);
}

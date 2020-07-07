import express, { json } from "express";
import path from "path";
import bodyParser from "body-parser";
// import Router from "./Router";

const app = express();
const port = 3000;
app.use(json());
app.set("clientPath", path.join(__dirname, "..", "..", "teste"));
console.log(app.get("clientPath"), "ola");
app.use(express.static(app.get("clientPath")));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
} catch (err) {
  console.log(err);
}

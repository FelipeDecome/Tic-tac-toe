import express, { json } from "express";
import path from "path";

const app = express();
const port = 3000;
app.use(json());

app.use(express.static(path.resolve(__dirname, "..", "..", "client")));

try {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
} catch (err) {
    console.log(err);
}

import express from "express";
import path from "path";
import http from "http";

const webApp = express();

const port = 3000;
const server = http.createServer(webApp);

const publicPath = path.resolve(__dirname, "..", "public");

webApp.use(express.static(publicPath));

webApp.get("/", (req, res) => {
    res.sendFile(publicPath + "/index.html");
});

try {
    server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
} catch (err) {
    console.log(err);
}

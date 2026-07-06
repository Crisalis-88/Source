 import * as http from "node:http";
 import * as fs from "node:fs/promises";
 import * as path from "node:path";
 import { fuleUrlToPath } from "node:url";

const PORT = 8080;
const HOST = "localhost";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, 'src', "public");

const server = http.createServer();

 server.on("request", async (req, res) => {

    if (req.method != "GET"){
        res.writeHead(405, {"Content-Type": "text/plain"})
        return res.end("Method not Allowed");
    }

    res.statusCode = 200;

    const index = await fs.readFile(`./index.html`, "utf-8");

    res.end(index)
 })

 server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
 });
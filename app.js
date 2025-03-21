const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("<h1>My name is Pantelis!</h1><p>Welcome to my awesome app.</p>");
});


app.listen(port);
console.log(`App running on http://localhost:${port}`);

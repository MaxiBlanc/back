const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const htmlResponse = ` 
    <html>
        <head>
            <title> titulo </title>
        </head>
        <body>
            <h1> hola mundo </h1>
        </body>
    </html>`;
    
    res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

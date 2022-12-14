const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`))

app.get("*", (req, res) =>
    res.sendFile("index.html", { root: `${__dirname}/dist` })
);

app.listen(PORT, () => {
    console.log(`im on port ${PORT}`);
})
const express = require(`express`);
const expressConfig = require(`./config/express`);


start();

async function start() {
    const app = express();

    expressConfig(app);

    app.get(`/`, (req, res) => res.render(`home`, { layout: false }));
    app.listen(3000, () => console.log(`server running or port 3000`));
}
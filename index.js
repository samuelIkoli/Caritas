const express = require("express");
const app = express();

// const sequelize = require('./config/sequelize');
// const passport = require('passport');

const session = require('express-session');
const { readdirSync } = require("fs");
const mongoose = require('mongoose');

// const LocalStrategy = require('passport-local');
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT
const dbUrl = process.env.DB_URL

async function main() {
    await mongoose.connect(dbUrl)
}

main().catch(err => console.log("we dey get error", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "correction error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get("/", (req, res) => {
    res.send('Charity games')
})

const sessionConfig = {
    name: 'session',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


app.use(session(sessionConfig))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


readdirSync("./routes").map((path) =>
    app.use("/", require(`./routes/${path}`))
);


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})

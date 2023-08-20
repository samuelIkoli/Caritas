const mongoose = require('mongoose');
const Number = require('../models/numbers');
const dbUrl = process.env.DB_URL

async function main() {
    await mongoose.connect(dbUrl)
}

export default async function handler() {
    // const number = Math.floor(Math.random() * 9999);
    // console.log('Number is', number);
    // const newNum = new Number({ number });
    // await newNum.save();
    // return
    console.log('hey')
}
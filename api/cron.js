const mongoose = require('mongoose');
const Number = require('../models/numbers');
const dbUrl = process.env.DB_URL
const { Mail } = require('../utils/validate')

async function main() {
    await mongoose.connect(dbUrl)
}

export default async function handler() {
    Mail('ayibanimiikoli@gmail.com', 'www.google.com')
    // const number = Math.floor(Math.random() * 9999);
    // console.log('Number is', number);
    console.log('Number is fine');
    // const newNum = new Number({ number });
    // await newNum.save();
    return
}
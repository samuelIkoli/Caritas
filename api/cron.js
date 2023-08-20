const Number = require('../models/numbers');


export default async function handler() {
    const number = Math.floor(Math.random() * 9999);
    console.log('Number is', number);
    const newNum = new Number({ number });
    await newNum.save();
}
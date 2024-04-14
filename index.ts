#! /usr/bin/env node

import inquirer from 'inquirer'

const currency: any = {
        USD: 1.00,
        EUR: 0.95,
        GBP: 0.81,
        CNY: 7.28,
        AED: 3.70,
        SAR: 3.77,
        PKR: 280.00

};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            type: 'list',
            message: "Enter From Currency",
            choices: ['USD', 'EUR', 'GBP', 'CNY', 'AED', 'SAR', 'PKR'] 
        },

        {
            name: 'to',
            type: 'list',
            message: "Enter To Currency",
            choices: ['USD', 'EUR', 'GBP', 'CNY', 'AED', 'SAR', 'PKR'] 
        },

        {
            name: 'amount',
            type: 'number',
            message: "Enter Your Amount",
            choices: ['USD', 'EUR', 'GBP', 'CNY', 'AED', 'SAR', 'PKR'] 
        }

    ]
);

let inputAmount = currency [user_answer.from]
let outputAmount = currency [user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / inputAmount
let convertedAmount = baseAmount * outputAmount
let formattednum: string = convertedAmount.toFixed(2);
console.log(formattednum)


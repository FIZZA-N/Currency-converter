#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,  //base currency 
    PKR: 278.55,
    EUR: 0.92,
    RUB: 87.75,
    CNY: 7.27,
    JPY: 157.12,
    GBP: 0.77,
    AUD: 1.51,
    SAR: 3.75,
    AED: 3.67,
    INR: 83.65

};

console.log("\n Welcome to MY First Currency conversion program \n")

let  user_answer = await inquirer.prompt([
    
        {
            type: "list",
            name: "from",
            message: "Please enter the currency you want to convert from:",
            choices: ['USD','PKR','EUR','RUB', 'CNY', 'JPY', 'GBP', 'AUD', 'SAR', 'AED', 'INR']

        },
        {
            type: "list",
            name: "to",
            message: "Enter the currency you want to convert To:",
            choices: ['USD', 'PKR', 'EUR', 'RUB', 'CNY', 'JPY', 'GBP', 'AUD', 'SAR', 'AED', 'INR']

        },
        {
            name: "Amount",
            message: "Please specify the amount you would like to convert:",
            type: "number"

        }
]
)
let userfromcurrency = user_answer.from
let usertocurrency = user_answer.to
let fromAmount = currency[userfromcurrency]     // eur  0.92
let toamount = currency[usertocurrency]          // eur   0.77
let amount = user_answer.Amount                   // 5000
let baseamount = amount/fromAmount              //  5000 / 0.92
let converted_amount = baseamount*toamount   // 5,434.782608695652 * 0.77                        
// //   ASUUMING THAT I HAVE TO CONVERT  usd to eur
console.log(`\n Here is the converted amount ${converted_amount}\n `);
console.log("Thank you for using my Currency Converter");











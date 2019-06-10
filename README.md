# Arabic to Roman Numeral
This command line tool converts Arabic number to Roman numeral

## Installation
1. Download and install [Node.js](https://nodejs.org/en/)
2. Make sure `npm` is already install by running `npm -v`. If not, check [Get npm](https://www.npmjs.com/get-npm)

## Usage
To get the roman numeric result from command line, use following line

`$ npm run convert <Arabic number>`

For example

```
$ npm run convert 555
Roman numeral:  DLV
```

## Test
Run this command

`$ npm test`

## How to approach the roman numeric problem

1) Create a list of paired value between Arabic and Roman numbers. Sorted by descending
2) Create another Arabic list based on the previous Arabic and Roman list
3) Loop through the Arabic list with a condition of the input number is not equal zero
  3.1) Under the loop, create another condition by subtracting the input number from the current Arabic number  
  3.2) If the result from the previous condition is negative, skip the current Arabic number and change to lower Arabic number
  3.3) If the result from the previous condition is zero or positive, get the Roman number from the Roman-Arabic list and append the result to a prepared empty string. Subtract input with current Arabic number
4) Iterate the input number until it's zero and exit the loop
5) Return the final Roman numeric string

## Author
Wichai Termwuttipreecha

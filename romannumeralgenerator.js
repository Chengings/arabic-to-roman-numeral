'use strict'

class RomanNumeralGenerator {
  generate (numberInput) {
    // parse string to integer
    numberInput = +numberInput

    if (!Number.isInteger(numberInput) || isNaN(numberInput) || numberInput < 1 || numberInput > 3999) {
      throw new Error('This input is not supported.')
    }

    let romanNumberText = ''
    let index = 0
    const hinduArabicToRomanObj = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    }
    // Object.keys return ascending array. Reverse it to get descending list
    const hinduArabicArray = Object.keys(hinduArabicToRomanObj).reverse()

    while (numberInput > 0) {
      if (numberInput - hinduArabicArray[index] >= 0) {
        // concat roman number (string) to final result
        romanNumberText += hinduArabicToRomanObj[hinduArabicArray[index]]
        // subtract founded the number from input
        numberInput -= hinduArabicArray[index]
      } else {
        index++
      }
    }

    return romanNumberText
  }
}

module.exports = RomanNumeralGenerator

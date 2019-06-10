'use strict'

const romanNumeralGenerator = require('./romannumeralgenerator.js')

try {
    if (process.argv[2] === undefined) {
        throw new Error('Please put a number argument')
    }
    
    const numberInput = process.argv[2]
    const romanConverter = new romanNumeralGenerator()
    const generatedRomanNumber = romanConverter.generate(numberInput)
    // print result
    console.log('Roman numeral: ', generatedRomanNumber)
} catch (e) {
    console.error(e)
}

'use strict'

const assert = require('assert')
const RomanNumeralGenerator = require('./romannumeralgenerator.js')

const romanConverter = new RomanNumeralGenerator()

// Test invalid values
assert.throws(
  () => {
    romanConverter.generate(4000)
  },
  Error
)

assert.throws(
  () => {
    romanConverter.generate(0)
  },
  Error
)

assert.throws(
  () => {
    romanConverter.generate(1.9999999)
  },
  Error
)

assert.throws(
  () => {
    romanConverter.generate('This is non numeric value')
  },
  Error
)

// Test vaid values
assert.strictEqual(romanConverter.generate(1), 'I')
assert.strictEqual(romanConverter.generate(2), 'II')
assert.strictEqual(romanConverter.generate(3), 'III')
assert.strictEqual(romanConverter.generate(4), 'IV')
assert.strictEqual(romanConverter.generate(5), 'V')
assert.strictEqual(romanConverter.generate(6), 'VI')
assert.strictEqual(romanConverter.generate(7), 'VII')
assert.strictEqual(romanConverter.generate(8), 'VIII')
assert.strictEqual(romanConverter.generate(9), 'IX')
assert.strictEqual(romanConverter.generate(10), 'X')
assert.strictEqual(romanConverter.generate(11), 'XI')
assert.strictEqual(romanConverter.generate(12), 'XII')
assert.strictEqual(romanConverter.generate(13), 'XIII')
assert.strictEqual(romanConverter.generate(14), 'XIV')
assert.strictEqual(romanConverter.generate(15), 'XV')
assert.strictEqual(romanConverter.generate(16), 'XVI')
assert.strictEqual(romanConverter.generate(17), 'XVII')
assert.strictEqual(romanConverter.generate(18), 'XVIII')
assert.strictEqual(romanConverter.generate(19), 'XIX')
assert.strictEqual(romanConverter.generate(20), 'XX')
assert.strictEqual(romanConverter.generate(40), 'XL')
assert.strictEqual(romanConverter.generate(50), 'L')
assert.strictEqual(romanConverter.generate(55), 'LV')
assert.strictEqual(romanConverter.generate(60), 'LX')
assert.strictEqual(romanConverter.generate(70), 'LXX')
assert.strictEqual(romanConverter.generate(80), 'LXXX')
assert.strictEqual(romanConverter.generate(90), 'XC')
assert.strictEqual(romanConverter.generate(99), 'XCIX')
assert.strictEqual(romanConverter.generate(100), 'C')
assert.strictEqual(romanConverter.generate(101), 'CI')
assert.strictEqual(romanConverter.generate(150), 'CL')
assert.strictEqual(romanConverter.generate(200), 'CC')
assert.strictEqual(romanConverter.generate(300), 'CCC')
assert.strictEqual(romanConverter.generate(400), 'CD')
assert.strictEqual(romanConverter.generate(500), 'D')
assert.strictEqual(romanConverter.generate(600), 'DC')
assert.strictEqual(romanConverter.generate(700), 'DCC')
assert.strictEqual(romanConverter.generate(800), 'DCCC')
assert.strictEqual(romanConverter.generate(900), 'CM')
assert.strictEqual(romanConverter.generate(1000), 'M')
assert.strictEqual(romanConverter.generate(1500), 'MD')
assert.strictEqual(romanConverter.generate(1900), 'MCM')
assert.strictEqual(romanConverter.generate(2019), 'MMXIX')
assert.strictEqual(romanConverter.generate(3000), 'MMM')
assert.strictEqual(romanConverter.generate(3999), 'MMMCMXCIX')

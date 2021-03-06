const { typeNothing } = require('./_allTypes')
const Just = require('./Just')

function getOrElse(defaultValue) {
  return defaultValue
}

function getValue(errCallback) {
  return errCallback()
}

const Nothing = Object.freeze(Object.create(
  {
    '@@type': typeNothing,
    toString: () => '',
    inspect: () => 'Nothing',
    ap: () => Nothing,
    map: () => Nothing,
    tap: () => Nothing,
    leftMap: func => Just(func()),
    flatMap: () => Nothing,
    getOrElse,
    getValue,
    'fantasy-land/map': () => Nothing,
    toJSON: () => null
  },
  {
    value: {
      value: null,
      writable: false,
      enumerable: true,
      configurable: false
    }
  }
))

module.exports = Nothing

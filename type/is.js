/* eslint-disable  */

const testFunction = ctor => ctor === Function
const isFunction = value => typeof value === 'function'

const testSymbol = ctor => typeof ctor === 'function' && typeof ctor['@@type'] === 'symbol'
const isSymbol = (ctor, value) => value != null && ctor['@@type'] === value['@@type']

const testMaybe = ctor => typeof ctor === 'object' && ctor['@@type'] === require('./Maybe')['@@type']
const isMaybe = value => value != null && [require('./Just')['@@type'], require('./Nothing')['@@type']].indexOf(value['@@type']) > -1

const testType = (ctor) => typeof ctor === 'object' && typeof ctor['@@type'] === 'symbol'
const isType = (ctor, value) => value != null && ctor['@@type'] === value['@@type']

const testPromise = (ctor) => ctor != null && ctor === Promise
const isPromise = value => value != null && isFunction(value.then)

const defaultTest = (ctor, value) => value != null && value.constructor === ctor || (value != null && value instanceof ctor)

const is = ctor => value =>
  testFunction(ctor) ? isFunction(value)
  : testSymbol(ctor) ? isSymbol(ctor, value)
  : testMaybe(ctor) ? isMaybe(value)
  : testType(ctor) ? isType(ctor, value)
  : testPromise(ctor) ? isPromise(value)
  : defaultTest(ctor, value)

module.exports = is

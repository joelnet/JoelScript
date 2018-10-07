/* eslint-disable */
const isThenable = require('../_internal/isThenable')
const iterableSerialReduce = require('../_internal/iterableSerialReduce')
const call = require('../_internal/call')

const asyncMapReducer = func => (acc, x) =>
  call (val => (acc.push(val), acc)) (func (x))

const map = func => iterable => {
  const values = []
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done) {
    const result = func(value)

    if (isThenable(result)) {
      return iterableSerialReduce(asyncMapReducer(func), null, iterator, result.then(x => values.concat(x)))
    }

    values.push(result)
    var { value, done } = iterator.next()
  }

  return values
}

module.exports = map

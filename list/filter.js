
const call = require('../_internal/call')
const reduceWhile = require('./reduceWhile')

const asyncFilterReducer = func => acc => x => call(val => (val && acc.push(x), acc))(func(x))

// filter :: Function -> Iterable -> Array
const filter = predicate => reduceWhile(null)(asyncFilterReducer(predicate))([])

module.exports = filter

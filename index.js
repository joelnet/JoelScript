module.exports.I = require('./combinators/I')
module.exports.K = require('./combinators/K')
module.exports.S = require('./combinators/S')
module.exports.W = require('./combinators/W')
module.exports.error = require('./console/error')
module.exports.log = require('./console/log')
module.exports.logF = require('./console/logF')
module.exports.pipe = require('./core/pipe')
module.exports.into = require('./core/into')
module.exports.pipeR = require('./core/pipeR')
module.exports.run = require('./core/run')
module.exports.curry = require('./function/curry')
module.exports.lift = require('./function/lift')
module.exports.liftA = require('./function/liftA')
module.exports.liftP = require('./function/liftP')
module.exports.swap = require('./function/swap')
module.exports.tap = require('./function/tap')
module.exports.ap = require('./list/ap')
module.exports.filter = require('./list/filter')
module.exports.flatMap = require('./list/flatMap')
module.exports.head = require('./list/head')
module.exports.join = require('./list/join')
module.exports.map = require('./list/map')
module.exports.range = require('./list/range')
module.exports.reduce = require('./list/reduce')
module.exports.reduceWhile = require('./list/reduceWhile')
module.exports.sort = require('./list/sort')
module.exports.tail = require('./list/tail')
module.exports.allPass = require('./logic/allPass')
module.exports.anyPass = require('./logic/anyPass')
module.exports.cond = require('./logic/cond')
module.exports.ifElse = require('./logic/ifElse')
module.exports.ifError = require('./logic/ifError')
module.exports.unless = require('./logic/unless')
module.exports.when = require('./logic/when')
module.exports.clone = require('./object/clone')
module.exports.pathOr = require('./object/pathOr')
module.exports.propOr = require('./object/propOr')
module.exports.append = require('./string/append')
module.exports.prepend = require('./string/prepend')
module.exports.replace = require('./string/replace')
module.exports.$ = require('./string/template')
module.exports.sleep = require('./threading/sleep')
module.exports.Either = require('./type/Either')
module.exports.is = require('./type/is')
module.exports.Just = require('./type/Just')
module.exports.Left = require('./type/Left')
module.exports.Maybe = require('./type/Maybe')
module.exports.Nothing = require('./type/Nothing')
module.exports.Right = require('./type/Right')

// @flow

const _ = require('lodash')
const R = require('ramda')

// serialize :: Object => String
const serialize = (obj) => JSON.stringify(obj, null, 2)
const cleanup = (str) => str.replace(/"/g, '')
const walk = (func, obj) => JSON.parse(JSON.stringify(obj), func)

const createFlowType = (obj) =>
  cleanup(serialize(walk(mapType, obj)))

const mapType = (key, value) => R.cond([
  [R.is(Number), R.always('number')],
  [R.is(Boolean), R.always('boolean')],
  [R.isEmpty, R.always('Object')],
  [R.is(String), R.always('string')],
  [Array.isArray, value => `Array<${findMode(value)}>`],
  [R.T, R.always(value)]
])(value)

const inferType = R.cond([
  [R.isNil, R.always('void')],
  [_.isInteger, R.always('integer')],
  [R.is(Number), R.always('number')],
  [_.isDate, R.always('date')],
  [R.is(String), R.always('string')],
  [R.T, R.always('mixed')]
])

// findMode :: Array<T> => T
const findMode = R.pipe(
  R.countBy(R.identity),
  R.toPairs(),
  R.sortBy(R.tail),
  R.takeLast(1),
  R.map(R.head),
  R.head,
)

const mostCommonTypeInAr = R.pipe(
  R.map(inferType),
  findMode,
)

module.exports = {
  createFlowType,
  mostCommonTypeInAr,
}

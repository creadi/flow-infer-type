// @flow

const _ = require('lodash')
const R = require('ramda')

// toFlowType :: Object => String
const toFlowType = (obj) => JSON.stringify(obj, null, 2)
const cleanup = (str) => str.replace(/"/g, '')
const walk = (func, obj) => JSON.parse(JSON.stringify(obj), func)

const createFlowType = (obj) =>
  cleanup(
    toFlowType(
      walk((key, value) => {
        if (R.is(Number, value)) {
          return 'number'
        }
        if (R.is(Boolean, value)) {
          return 'boolean'
        }
        if (R.isEmpty(value)) {
          return 'Object'
        }
        if (R.is(String, value)) {
          return 'string'
        }
        // Here maybe check if this is flat array
        if (Array.isArray(value)) {
          return `Array<${mostCommonValueInArr(value)}>`
        }

        return value
      }, obj)))

const inferType = R.cond([
  [R.isNil, R.always('void')],
  [_.isInteger, R.always('integer')],
  [R.is(Number), R.always('number')],
  [_.isDate, R.always('date')],
  [R.is(String), R.always('string')],
  [R.T, R.always('mixed')]
])

const mostCommonValueInArr = R.pipe(
  R.countBy(R.identity),
  R.toPairs(),
  R.sortBy(R.tail),
  R.takeLast(1),
  R.map(R.head),
  R.head,
)

const mostCommonTypeInAr = R.pipe(
  R.map(inferType),
  mostCommonValueInArr,
)

module.exports = {
  createFlowType,
  mostCommonTypeInAr,
}

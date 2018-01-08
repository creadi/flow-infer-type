// @flow
import test from 'ava'

const { mostCommonTypeInAr } = require('../src')

test('Inferring from array', t => {
  const testInteger = ['4', 1, 1, 2, 3.1, '5']
  const testNull = ['4', null, undefined, null, 3.1, '5']
  const testString = ['4', null, 'sdasda', null, 3.1, '5']
  const testDate = [new Date('4'), 'sdasda', new Date(), 3.1, new Date(),'5']
  const testMixed = [{}, {}, new Date(), 3.1, {}, new Date(),'5']

  t.deepEqual(mostCommonTypeInAr(testInteger), 'integer')
  t.deepEqual(mostCommonTypeInAr(testNull), 'void')
  t.deepEqual(mostCommonTypeInAr(testString), 'string')
  t.deepEqual(mostCommonTypeInAr(testDate), 'date')
  t.deepEqual(mostCommonTypeInAr(testMixed), 'mixed')
})

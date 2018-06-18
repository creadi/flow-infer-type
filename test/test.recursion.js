// @flow
import test from 'ava'

import { createFlowType } from '../src'

test('nestedArray Objects', t => {
  const from = {
    array: [
      {
        string: 'value',
        object: { property: 'value' },
        array: [ 'one', 'two', 'three', 'four' ],
        number: 42
      },
      {
        string: 'value as well',
        object: { property: 'value as well' },
        array: [ 'four', 'three', 'two', 'one' ],
        number: 43
      }
    ]
  }

  const expected = `{
    array: Array<{
    	string: string,
        object: {
      		property: string,
        },
        array: Array<string>,
        number: number
    }>
  }`

  t.deepEqual(createFlowType(from), expected)

})

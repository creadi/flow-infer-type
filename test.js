// @flow
const assert = require('assert')
const createFlowType = require('./index')

const from = {
  'dataValidation': {
    'type': 'object',
    'properties': {
      'insuredAmount': {
        'type': 'number',
        'multipleOf': 0.05
      },
      'numberOfNights': {
        'type': 'integer'
      },
      'numberOfPeople': {
        'type': 'integer'
      }
    },
    'required': [
      'insuredAmount',
      'numberOfNights',
      'numberOfPeople'
    ]
  }
}

export type DataValidation = {
  type: string,
  properties: {
    insuredAmount: {
      type: string,
      multipleOf: number,
    },
    numberOfNights: {
      type: string,
    },
    numberOfPeople: {
      type: string,
    }
  },
  required: Array<string>
}

assert(createFlowType(from) === to.toString())
// @flow
import test from 'ava'

const { createFlowType } = require('../src')

test('Can infer Basic types with Objects', t => {
  const user = {
    currentPage: 0,
    error: 'message',
    formData: {
      city: {},
      dateOfBirth: {},
      didAcceptTos: {},
      email: {},
      firstName: {},
      gender: {},
      houseNumber: {},
      lastName: {},
      password: {},
      postcode: {},
      street: {},
      telephone: {},
    },
    isBusy: false,
    isLoggedIn: false,
    pages: {},
  }

  const inferredUser = `{
  currentPage: number,
  error: string,
  formData: {
    city: Object,
    dateOfBirth: Object,
    didAcceptTos: Object,
    email: Object,
    firstName: Object,
    gender: Object,
    houseNumber: Object,
    lastName: Object,
    password: Object,
    postcode: Object,
    street: Object,
    telephone: Object
  },
  isBusy: boolean,
  isLoggedIn: boolean,
  pages: Object
}`

  t.deepEqual(createFlowType(user), inferredUser)
})

test('Can infer Array<types>', t => {
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

  const expected = `{
  dataValidation: {
    type: string,
    properties: {
      insuredAmount: {
        type: string,
        multipleOf: number
      },
      numberOfNights: {
        type: string
      },
      numberOfPeople: {
        type: string
      }
    },
    required: Array<string>
  }
}`
  t.deepEqual(createFlowType(from), expected)
})

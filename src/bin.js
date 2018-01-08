#!/usr/bin/env node

const { createFlowType } = require('./index')

const parse = (str) => {
  console.log('dsadsad')
  let result

  try {
    // good json
    result = JSON.parse(str.toString())
  } catch (e) {
    // plain js object
    eval(`result = ${str}`)
  }

  return result
}

process.stdin.resume()
process.stdin.on('data', data => {
  console.log(data)
  console.log(createFlowType(parse(data)))
})

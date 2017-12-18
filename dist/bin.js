#!/usr/bin/env node


const createFlowType = require('./index');

process.stdin.resume();
process.stdin.on('data', data => {
  const obj = JSON.parse(data.toString());
  console.log(createFlowType(obj));
});
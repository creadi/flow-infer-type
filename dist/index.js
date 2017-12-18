const R = require('ramda');

// toFlowType :: Object => String
const toFlowType = obj => JSON.stringify(obj, null, 2);
const cleanup = str => str.replace(/"/g, '');
const walk = (func, obj) => JSON.parse(JSON.stringify(obj), func);

const createFlowType = obj => cleanup(toFlowType(walk((key, value) => {
  if (R.is(Number, value)) {
    return 'number';
  }
  if (R.is(Boolean, value)) {
    return 'boolean';
  }
  if (R.isEmpty(value)) {
    return 'Object';
  }
  if (R.is(String, value)) {
    return 'string';
  }

  return value;
}, obj)));

module.exports = createFlowType;
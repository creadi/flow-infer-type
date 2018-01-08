[![Build Status](https://travis-ci.org/creadi/flow-infer-type.svg?branch=master)](https://travis-ci.org/creadi/flow-infer-type)
# About

Generate flow type from given object.

# Install
```
npm i -g flow-infer-type
```

# Usage
One can use with all shell scripts also programmatically.
You can use to infer shape of object of any REST - like API:
```bash
curl 'https://dev.api.simpego.ch/products' --compressed | jq .[0] | node flow-infer-type
```

## Json 
```bash
echo '{"a": "ssss"}' | node flow-infer-type
```

Will generate valid flow(/ possibly typescript) definition
```flow js
{
  a: string
}
```


## Js Object
```bash
echo '{a: 42}' | node flow-infer-type
```

Will generate: 
```flow js
{
  a: number
}
```

or 

## Clipboard
Copy paste your object from clipboard
```bash
pbpaste | node flow-infer-type
```


# Test
```bash
npm test
```


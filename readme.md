# About

Generate flow type from given object.

# Install
```
npm i -g flow-infer-type
```

# Usage
## json 
```bash
echo \'{"a": "ssss"}\' | node flow-infer-type
```
{
  a: string
}

or 

## clipboard
```bash
pbpaste | node flow-infer-type
```


## js object
```bash
echo \'{a: "ssss"}\' | node flow-infer-type
```


# Test
```bash
npm test
```


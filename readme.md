# About

Generate flow type from given object.

# Usage
`echo '{"a": "ssss"}' | node src/bin.js`
{
  a: string
}

or 


```bash
pbpaste | node flow-infer-type
```



# Test
```bash
npm test
```


#!/usr/bin/env bash

# Tests for shell integration

# JSON => flow type
echo '{"a": "ssss"}' | dist/bin.js

# JS object => flow type
echo '{a: "ssss"}' | dist/bin.js

echo '{a: 42}' | dist/bin.js

#!/usr/bin/env bash

# JSON => flow type
echo '{"a": "ssss"}' | dist/bin.js

# JS object => flow type
echo '{a: "ssss"}' | dist/bin.js

#!/bin/env node

const emojascii = require('./emojascii')

const args = process.argv
const text = args[2]
const emojis = args.slice(3)

if (!text || !emojis.length) {
  console.log(`usage: emojascii text emoji [emoji...]

  example:
    emojascii hello :sunny:
`)
  process.exit(1)
}

const res = emojascii(text, emojis)

console.log(res)

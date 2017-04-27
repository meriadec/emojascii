const symbols = require('./symbols')

module.exports = function emojascii (text, emojis) {
  const letters = text.split('')
  const letterHeight = symbols[0].length
  const res = []
  res.push('.')
  for (let i = 0; i < letterHeight; i++) {
    const step = []
    letters.forEach((c, j) => {
      const emoji = emojis[j % emojis.length]
      const code = c.toLowerCase().charCodeAt(0)
      if (code >= 97 && code <= 122) {
        const letter = symbols[code - 97]
        const row = []
        if (j === 0) { row.push('.') }
        const splitted = letter[i].split('')
        splitted.forEach(s => {
          if (s === ' ') {
            row.push('      ')
          } else {
            row.push(emoji)
          }
        })
        step.push(row.join(''))
      }
    })
    res.push(step.join('        '))
  }
  res.push('.')
  return res.join('\n')
}

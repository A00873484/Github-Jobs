// 'new york' -> 'new+york'
const spaceToPlus = str => str ? str.replace(/\s/g, '+') : ''

// convert object to "?key=value&key2=value2"
function addQuery (query) {
  const keys = Object.keys(query)
  const stringParts = keys.map((key, index) => (
    query[key] ? `${index === 0 ? '?' : '&'}${key}=${spaceToPlus(query[key])}` : ''
  ))
  return stringParts.join('')
}

module.exports = addQuery

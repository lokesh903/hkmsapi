
   exports.paginateArray = (array, perPage, page) => array.slice((page - 1) * perPage, page * perPage),
   exports.sortCompare = key => (a, b) => {
    const fieldA = a[key]
    const fieldB = b[key]
  
    let comparison = 0
    if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }
    return comparison
  },
  
  exports.getRandomInt = (min, max) => {
    if (min > max) {
      const temp = max
      /* eslint-disable no-param-reassign */
      max = min
      min = temp
      /* eslint-enable */
    }
  
    if (min <= 0) {
      return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min
    }
    return Math.floor(Math.random() * max) + min
  },
  
  exports.randomDate = (start, end) => {
    const diff = end.getTime() - start.getTime()
    const newDiff = diff * Math.random()
    const date = new Date(start.getTime() + newDiff)
    return date
  }
  



export const utilService = {
    getFormattedDate,
    downloadCSV,
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    saveToStorage,
    loadFromStorage,
    deepCopy,
    getRandomColor,
    // getDemoData,
    copyToClipboard,
  }
  
  function getFormattedDate(timeStamp) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    // If Pass By Year
    if (new Date().getFullYear() - timeStamp.getFullYear() > 1) {
      return monthNames[timeStamp.getMonth()] + ' ' + timeStamp.getFullYear()
      // If Pass By Less Then 24 Hours 
    } else if (new Date() - timeStamp < 1000 * 60 * 60 * 24) {
      const hour = (timeStamp.getHours() < 10) ? '0' + timeStamp.getHours() : timeStamp.getHours()
      const minutes = (timeStamp.getMinutes() < 10) ? '0' + timeStamp.getMinutes() : timeStamp.getMinutes()
      return hour + ':' + minutes
    } else {
      return monthNames[timeStamp.getMonth()] + ' ' + (timeStamp.getDay() + 1)
    }
  
  }
  
  
  function downloadCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr)
  
    const csvData = array.map((it) => {return Object.values(it).toString()}).join('\n')
  
    const anchor = document.createElement('a');
    anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvData);
    anchor.target = '_blank';
    anchor.download = `EXAMPLE.csv`;
    anchor.click();
  }
  
  
  function makeId(length = 6) {
    var txt = ''
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
  
    return txt
  }
  
  function makeLorem(size = 100) {
    var words = [
      'The sky',
      'above',
      'the port',
      'was',
      'the color of television',
      'tuned',
      'to',
      'a dead channel',
      '.',
      'All',
      'this happened',
      'more or less',
      '.',
      'I',
      'had',
      'the story',
      'bit by bit',
      'from various people',
      'and',
      'as generally',
      'happens',
      'in such cases',
      'each time',
      'it',
      'was',
      'a different story',
      '.',
      'It',
      'was',
      'a pleasure',
      'to',
      'burn',
    ]
    var txt = ''
    while (size > 0) {
      size--
      txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
  }
  
  function copyToClipboard(text) {
    var input = document.createElement('input')
    input.setAttribute('value', text)
    document.body.appendChild(input)
    input.select()
    var result = document.execCommand('copy')
    document.body.removeChild(input)
    return result
  }
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
  }
  
  
  function debounce(func, timeout = 1000) {
    let timer
  
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }
  
  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
  }
  
  function deepCopy(val) {
    return JSON.parse(JSON.stringify(val))
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  
  // import Chance from 'chance'
  // function getDemoData() {
  //   var chance = new Chance()
  //   const demoData = []
  
  //   for (var i = 0; i < 300; i++) {
  //     demoData.push({
  //       createdAt: chance.date({ year: chance.integer({ min: 2020, max: 2022 }) })
  //       [Symbol.toPrimitive]('number'),
  //       msg: chance.sentence({ words: 5 }),
  //     })
  //   }
  //   return demoData
  // }
  
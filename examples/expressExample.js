// testdisp.js
const express = require('express')
const app = express()

app.set('views', './test/views') // specify the views directory
app.set('view engine', 'squirelly')

app.get('/', function (req, res) {
  res.render('index', {
    title: 'lotsa',
    stuff: 'grandkid',
    num: 3,
    parent: {
      ben: 'gubler',
      child: {
        grandkid: 'hi'
      }
    }
  })
  console.log('render attempted')
})

app.listen(3000, function () {
  console.log('Should be rendering on port 3000...')
})

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
/*
app.get('/', (req, res) => res.render('pages/index'))
*/
app.get('/', function (req, res) {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'M',
      message: 'aravigold'
    },
    {
      title: 'A',
      message: 'rraza com tudoooo'
    },
    {
      title: 'I',
      message: 'nigualável'
    },
    {
      title: 'S',
      message: 'uper Diva'
    }
  ]

  const subtitle =
    'Uma linguagem de modelagem para criação de páginas HTML ultilizndo Javascript'

  res.render('pages/index', {
    qualities: items,
    subtitle: subtitle
  })
})

/*
app.get('/sobre', (req, res) => res.render('pages/about'))
*/
app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('rodando')

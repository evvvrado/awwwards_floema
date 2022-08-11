const express = require('express')
const path = require('path')
const app = express()
const port = 666

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('pages/home')
})

app.get('/about', (req, res) => {
	res.render('pages/about')
})

app.get('/detail/:uid', (req, res) => {
	res.render('pages/detail')
})

app.get('/collections', (req, res) => {
	res.render('pages/collections')
})



app.listen(port, () => {
	console.log(`SERVER SIDE IN PORT: ${port}`)
})

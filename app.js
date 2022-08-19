require('dotenv').config()

const logger = require('morgan')
const express = require('express')
const path = require('path')
const app = express()
const port = 666


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')




const fetch = require('node-fetch')
const Prismic = require('@prismicio/client')
const PrismicH = require('@prismicio/helpers')
const { application } = require('express')
const UAParser = require('ua-parser-js')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(errorHandler())
app.use(methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

const initApi = (req) => {
	return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		req,
		fetch,
	})
}

const handleRequest = async (api) => {
	// try {
	const [preloader, navigation, home, about, { results: collections }] =
		await Promise.all([
			// api.getSingle('meta'),
			api.getSingle('preloader'),
			api.getSingle('navigation'),
			api.getSingle('home'),
			api.getSingle('about'),
			api.query(Prismic.Predicates.at('document.type', 'collection'), {
				fetchLinks: 'product.image',
			}),
		]);


	// } catch (error) {
	// 	console.log(error)
	// }

	// const assets = []

	// home.data.gallery.forEach((item) => {
	// 	assets.push(item.image.url)
	// })

	// about.data.gallery.forEach((item) => {
	// 	assets.push(item.image.url)
	// })

	// about.data.body.forEach((section) => {
	// 	if (section.slice_type === 'gallery') {
	// 		section.items.forEach((item) => {
	// 			assets.push(item.image.url)
	// 		})
	// 	}
	// })

	// collections.forEach((collection) => {
	// 	collection.data.products.forEach((item) => {
	// 		assets.push(item.products_product.data.image.url)
	// 	})
	// })

	// console.log(assets)

	// return {
	// 	assets,
	// 	meta,
	// 	home,
	// 	collections,
	// 	about,
	// 	navigation,
	// 	preloader,
	// }

	return { preloader }
}


app.get('/', async (req, res) => {
	const api = await initApi(req);
	const defaults = await handleRequest(api)


	res.render('pages/home', {
		...defaults,
	})
})

app.get('/about', async (req, res) => {
	const api = await initApi(req)
	const defaults = await handleRequest(api)

	res.render('pages/about', {
		...defaults,
	})
})

app.get('/detail/:uid', (req, res) => {
	res.render('pages/detail')
})

app.get('/collections', (req, res) => {
	res.render('pages/collections')
})

app.listen(port, () => {
	console.log(`INICIANDO EM: http://localhost:${port}`)
})

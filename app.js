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
		])


	// } catch (error) {
	// console.log(error)
	// }

	const assets = []

	// home.data.gallery.forEach((item) => {
	// 	assets.push(item.image.url)
	// })

	// about.data.gallery.forEach((item) => {
	// 	assets.push(item.image.url)
	// })

	about.data.body.forEach((section) => {
		if (section.slice_type === 'gallery') {
			section.items.forEach((item) => {
				assets.push(item.image.url)
			})
		}
	})

	// collections.forEach((collection) => {
	// 	collection.data.products.forEach((item) => {
	// 		assets.push(item.products_product.data.image.url)
	// 	})
	// })

	// console.log(assets)

	return {
		assets,
		// meta,
		home,
		collections,
		about,
		navigation,
		preloader,
	}

}


// Link Resolver
const HandleLinkResolver = (doc) => {
	if (doc.type === 'product') {
		return `/detail/${doc.slug}`
	}

	if (doc.type === 'collections') {
		return '/collections'
	}

	if (doc.type === 'about') {
		return `/about`
	}

	// Default to homepage
	return '/'
}


// Middleware to inject prismic context
app.use((req, res, next) => {
	const ua = UAParser(req.headers['user-agent'])

	res.locals.isDesktop = ua.device.type === undefined
	res.locals.isPhone = ua.device.type === 'mobile'
	res.locals.isTablet = ua.device.type === 'tablet'

	res.locals.Link = HandleLinkResolver
	res.locals.PrismicH = PrismicH
	res.locals.Numbers = (index) => {
		return index === 0
			? 'One'
			: index === 1
				? 'Two'
				: index === 2
					? 'Three'
					: index === 3
						? 'Four'
						: ''
	}

	next()
})


app.get('/', async (req, res) => {
	const api = await initApi(req)
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



app.get('/detail/:uid', async (req, res) => {
	const api = await initApi(req)
	const defaults = await handleRequest(api)

	console.log(req.params.uid)

	// try {
	const product = await api.getByUID('product', req.params.uid, {
		fetchLinks: 'collection.title',
	});
	// } catch (error) {
	// console.log(error)
	// }

	// console.log(product)


	res.render('pages/detail', {
		...defaults,
		product,
	})
})


app.get('/collections', async (req, res) => {
	const api = await initApi(req);
	const defaults = await handleRequest(api);

	res.render('pages/collections', {
		...defaults,
	});
});

app.listen(port, () => {
	console.log(`INICIANDO EM: http://localhost:${port}`)
})

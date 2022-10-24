import { each } from 'lodash'
import About from 'pages/About'
import Collections from 'pages/Collections'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
import Preloader from 'components/Preloader'
import Navigation from 'components/Navigation'
import NormalizeWheel from 'normalize-wheel'

import Canvas from 'components/Canvas'

class App {
	constructor() {

		this.createContent()

		this.createPreloader()
		this.createNavigation()
		this.createCanvas()
		this.createPages()

		this.addLinkListeners()
		this.addListeners()

		this.update()
	}

	createNavigation() {
		this.navigation = new Navigation({
			template: this.template
		})
	}

	createPreloader() {
		this.preloader = new Preloader()
		this.preloader.once('completed', this.onPreloaded.bind(this))
	}

	createCanvas() {
		this.canvas = new Canvas()
	}

	createContent() {
		this.content = document.querySelector(".content")
		this.template = this.content.getAttribute('data-template') // or this.content.dataset.template 
		// console.log('Template is' + this.template)
	}

	createPages() {
		this.pages = {
			collections: new Collections(),
			detail: new Detail(),
			about: new About(),
			home: new Home(),
		}

		this.page = this.pages[this.template]
		this.navigation.onChange(this.template)

		this.page.create()

	}

	onPreloaded() {
		this.preloader.destroy()
		this.onResize()
		this.page.show()
	}

	onPopState() {
		this.onChange({
			url: window.location.pathname,
			push: true,
		})
	}

	async onChange({ url, push = true }) {
		await this.page.hide()


		const request = await window.fetch(url)

		console.log(url);

		if (request.status === 200) {
			const html = await request.text()
			const div = document.createElement('div')

			if (push) {
				window.history.pushState({}, '', url)
			}


			div.innerHTML = html
			const divContent = div.querySelector('.content')

			this.template = divContent.getAttribute('data-template')

			this.navigation.onChange(this.template)

			this.content.innerHTML = divContent.innerHTML
			this.content.setAttribute('data-template', this.template)

			this.page = this.pages[this.template]
			this.page.create()
			this.onResize()
			this.page.show()

			this.addLinkListeners();
		} else {
			console.log("Erro: ", request.error)
		}
	}

	onResize() {
		if (this.page && this.page.onResize) this.page.onResize()

		window.requestAnimationFrame(_ => {
			if (this.canvas && this.canvas.onResize) this.canvas.onResize()
		})
	}


	onTouchDown(event) {
		if (this.canvas && this.canvas.onTouchDown) {
			this.canvas.onTouchDown(event)
		}
	}

	onTouchMove(event) {
		if (this.canvas && this.canvas.onTouchMove) {
			this.canvas.onTouchMove(event)
		}
	}


	onTouchUp(event) {
		if (this.canvas && this.canvas.onTouchUp) {
			this.canvas.onTouchUp(event)
		}
	}

	onWheel(event) {
		const normalizedWheel = NormalizeWheel(event)

		if (this.canvas && this.canvas.onWheel) {
			this.canvas.onWheel(normalizedWheel)
		}
		if (this.page && this.page.onWheel) {
			this.page.onWheel(normalizedWheel)
		}
	}

	update() {
		if (this.canvas && this.canvas.update) this.canvas.update()
		if (this.page && this.page.update) this.page.update()
		this.frame = window.requestAnimationFrame(this.update.bind(this))
	}

	addListeners() {
		window.addEventListener('mousewheel', this.onWheel.bind(this));

		window.addEventListener('mousedown', this.onTouchDown.bind(this))
		window.addEventListener('mousemove', this.onTouchMove.bind(this))
		window.addEventListener('mouseup', this.onTouchUp.bind(this))

		window.addEventListener('touchstart', this.onTouchDown.bind(this))
		window.addEventListener('touchmove', this.onTouchMove.bind(this))
		window.addEventListener('touchend', this.onTouchUp.bind(this))


		window.addEventListener('resize', this.onResize.bind(this))
		window.addEventListener('popstate', this.onPopState.bind(this))
	}

	addLinkListeners() {
		const links = document.querySelectorAll('a')

		each(links, link => {
			link.onclick = event => {
				const { href } = link
				event.preventDefault()
				this.onChange({ url: href })
			}
		})
	}


}

new App()
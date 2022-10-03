import { each } from 'lodash'
import About from 'pages/About'
import Collections from 'pages/Collections'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
import GSAP from 'gsap';
import Preloader from 'components/Preloader'
import Navigation from './components/Navigation'


class App {
	constructor() {

		this.createContent()

		this.createPreloader()
		this.createNavigation()
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


	async onChange(url) {
		await this.page.hide()


		const request = await window.fetch(url)

		if (request.status === 200) {
			const html = await request.text()
			const div = document.createElement('div')

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
		} else {
			console.log("Erro: ", request.error)
		}
	}

	onResize() {
		if (this.page && this.page.onResize) this.page.onResize()
	}

	update() {
		if (this.page && this.page.update) this.page.update()
		this.frame = window.requestAnimationFrame(this.update.bind(this))
	}

	addListeners() {
		window.addEventListener('resize', this.onResize.bind(this))
	}

	addLinkListeners() {
		const links = document.querySelectorAll('a')

		each(links, link => {
			link.onclick = event => {
				const { href } = link
				event.preventDefault()
				this.onChange(href)
			}
		})
	}


}

new App()
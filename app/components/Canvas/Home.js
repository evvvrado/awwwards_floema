import gsap from 'gsap'
import { each, map } from 'lodash'
import { Plane, Transform } from 'ogl'

import Media from './Media'

export default class {
	constructor({ gl, scene, sizes }) {

		this.group = new Transform()
		this.gl = gl
		this.sizes = sizes


		this.mediaElements = document.querySelectorAll('.home__gallery__media__image')

		this.group.setParent(scene)

		this.createGeometry()
		this.createGallery()

		this.x = {
			current: 0,
			target: 0,
			lerp: 0.1
		}

		this.y = {
			current: 0,
			target: 0,
			lerp: 0.1
		}

		this.scroll = {
			x: 0,
			y: 0
		}

		this.scrollCurrent = {
			x: 0,
			y: 0
		}

	}


	createGeometry() {
		this.geometry = new Plane(this.gl)
	}


	createGallery() {
		this.medias = map(this.mediaElements, (element, index) => {
			return new Media({
				element,
				geometry: this.geometry,
				scene: this.group,
				sizes: this.sizes,
				gl: this.gl,
				index
			})
		})
	}


	onResize(event) {
		map(this.medias, media => media.onResize(event))
	}

	onTouchDown({ x, y }) {
		this.scrollCurrent.x = this.scroll.x
		this.scrollCurrent.y = this.scroll.y

	}


	onTouchMove({ x, y }) {
		const xDistance = x.start - x.end
		const yDistance = y.start - y.end

		this.x.target = this.scrollCurrent.x - xDistance
		this.y.target = this.scrollCurrent.y - yDistance
	}


	onTouchUp({ x, y }) {


	}


	update() {

		this.x.current = gsap.utils.interpolate(this.x.current, this.x.target, this.x.lerp)
		this.y.current = gsap.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

		this.scroll.x = this.x.current
		this.scroll.y = this.y.current


		map(this.medias, media => {
			media.update(this.scroll)
		})
	}
}
import { each } from 'lodash'
import { Plane, Transform } from 'ogl'

import Media from './Media'

export default class {
	constructor({ gl, scene }) {

		this.group = new Transform()
		this.gl = gl


		this.media = document.querySelectorAll('.home__gallery__media__image')

		this.group.setParent(scene)

		this.createGeometry()
		this.createGallery()

	}


	createGeometry() {
		this.geometry = new Plane(this.gl)
	}


	createGallery() {

		each(this.media, (element, index) => {
			return new Media({
				element,
				geometry: this.geometry,
				scene: this.group,
				gl: this.gl,
				index
			})
		})
	}
}
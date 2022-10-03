import Component from 'classes/Component'
import gsap from 'gsap'
import { each } from 'lodash'
import { COLOR_BRIGHT_GREY, COLOR_WHITE } from '../utils/colors'


export default class Navigation extends Component {
	constructor({ template }) {
		super({
			element: '.navigation',
			elements: {
				items: '.navigation__list__item',
				links: '.navigation__list__link'
			}
		})

		this.onChange(template)
	}


	onChange(template) {

		if (template === 'about') {
			gsap.to(this.element, {
				color: COLOR_BRIGHT_GREY,
				duration: 1.5,
			})

			gsap.to(this.elements.items[0], {
				autoAlpha: 0,
			})
			gsap.to(this.elements.items[1], {
				autoAlpha: 1,
			})

		} else {
			gsap.to(this.element, {
				color: COLOR_WHITE,
				duration: 1.5,
			})

			gsap.to(this.elements.items[0], {
				autoAlpha: 1,
			})
			gsap.to(this.elements.items[1], {
				autoAlpha: 0,
			})
		}



	}
}
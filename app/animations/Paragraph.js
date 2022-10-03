import GSAP from "gsap";
import Animation from "../classes/Animation";
import { calculate, split } from 'utils/text'

export default class Paragraph extends Animation {
	constructor({ element, elements }) {
		super({
			element,
			elements
		})


		this.elementLinesSpans = split({ element: this.element, append: true })
	}


	animateIn() {
		GSAP.set(this.element, {
			autoAlpha: 1
		})

		GSAP.fromTo(this.elementsLines, {
			autoAlpha: 0,
			y: '100%'
		}, {
			autoAlpha: 1,
			delay: 0.5,
			duration: 1.5,
			ease: 'expo.out',
			stagger: {
				axis: 'x',
				amount: 1,
			},
			y: '0%'
		})
	}

	animateOut() {
		GSAP.set(this.element, {
			autoAlpha: 0
		})
	}

	onResize() {
		this.elementsLines = calculate(this.elementLinesSpans)
	}
}
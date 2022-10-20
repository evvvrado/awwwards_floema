import Button from "classes/Button"
import Page from "classes/Page"

export default class Detail extends Page {
	constructor() {
		super({
			id: 'detail',
			element: '.detail',
			elements: {
				button: '.detail__button'
			}
		})
	}

	create() {
		super.create()
		this.button = new Button({
			element: this.elements.button
		})


		// this.elements.button.addEventListener('click', _ => console.log("Oh, you clicked me!"))
	}

	destroy() {
		this.button.removeEventListeners();
	}
}
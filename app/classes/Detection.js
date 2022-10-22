class Detection {
	isPhone() {
		if (!this.isPhoneChecked) {
			this.isPhoneChecked = true
			this.isPhoneChecked = document.documentElement.classList.contains('phone')
		}

		return this.isPhoneChecked
	}

	isTablet() {
		if (!this.isTabletChecked) {
			this.isTabletChecked = true
			this.isTabletChecked = document.documentElement.classList.contains('tablet')
		}

		return this.isTabletChecked
	}

	isDesktop() {
		if (!this.isDesktopChecked) {
			this.isDesktopChecked = true
			this.isDesktopChecked = document.documentElement.classList.contains('desktop')
		}

		return this.isDesktopChecked
	}
}

export default DetectionManager = new Detection()
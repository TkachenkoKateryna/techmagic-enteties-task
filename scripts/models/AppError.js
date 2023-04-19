const errorContainer = document.querySelector('.error');

export class AppError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AppError';
		this.message = message || 'Oops, something went wrong';
		this.#showError(this.message);
	}

	#showError = (mes) => {
		errorContainer.style.display = 'block';
		errorContainer.innerHTML = mes;
		setTimeout(this.#removeError, 3000);
	};

	#removeError = () => {
		errorContainer.style.display = 'none';
		errorContainer.innerHTML = '';
	};
}

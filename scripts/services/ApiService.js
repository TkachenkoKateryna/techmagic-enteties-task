export class ApiService {
	constructor(config) {
		this.config = config;
		this.instance = axios.create(config);
	}

	async makeRequest(method, url, options = {}) {
		const headers = { ...this.instance.defaults.headers, ...options.headers };

		try {
			const resp = await this.instance({
				...options,
				method,
				url,
				headers,
			});
			return resp?.data;
		} catch ({ response }) {
			return await Promise.reject(response?.data);
		}
	}

	get = (url, config) => this.makeRequest('get', url, config);

	post = (url, config) => this.makeRequest('post', url, config);

	put = (url, config) => this.makeRequest('put', url, config);

	del = (url, config) => this.makeRequest('delete', url, config);
}

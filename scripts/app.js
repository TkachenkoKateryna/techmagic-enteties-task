import { PostsService } from './services/PostsService.js';
import PostsApi from './services/PostsApi.js';
import { AppError } from './models/AppError.js';

class App {
	static async init() {
		try {
			const postsData = await PostsApi.getPosts();
			const posts = new PostsService(postsData);
			posts.render();
			posts.postForm.addEventListener('submit', posts.createPost);
		} catch {
			throw new AppError('Oops, smth went wrong');
		}
	}

	static addGlobalErrorHandler() {
		window.addEventListener('error', (event) => console.log(event));
	}
}

App.addGlobalErrorHandler();
App.init();

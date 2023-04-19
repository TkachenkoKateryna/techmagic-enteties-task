import PostsApi from './PostsApi.js';
import { Post } from '../models/Post.js';
import { AppError } from '../models/AppError.js';

export class PostsService {
	postForm = document.querySelector('form');

	constructor(postsData) {
		this.posts = postsData?.map((post) => new Post(post));
	}

	render = () => {
		this.posts.forEach((post) => {
			post.render(this.deletePost);
		});
	};

	createPost = async (event) => {
		event.preventDefault();
		const enteredTitle = event.currentTarget.querySelector('#title').value;
		const enteredContent = event.currentTarget.querySelector('#content').value;

		if (enteredTitle === '' || enteredContent === '') {
			throw new AppError('All form fields are required');
		}

		const post = new Post({
			userId: Math.floor(Math.random() * 10) + 1,
			body: enteredContent,
			title: enteredTitle,
			id: this.posts[this.posts.length - 1] + 1,
		});

		try {
			await PostsApi.createPost(post);
			this.posts.push(post);
		} catch (error) {
			throw new AppError(error.message);
		}

		post.render(this.deletePost);

		this.postForm.reset();
	};

	deletePost = async (id) => {
		try {
			await PostsApi.deletePost(id);
			this.posts = this.posts.filter((post) => post.id !== +id);
		} catch (error) {
			throw new AppError(error.message);
		}
	};
}

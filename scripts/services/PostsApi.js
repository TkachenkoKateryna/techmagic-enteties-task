import { ApiService } from './ApiService.js';

class PostsApi extends ApiService {
	getPosts = () => this.get('/posts');
	deletePost = (id) => this.del(`/posts/${id}`);
	createPost = (post) => this.post('/posts', { data: post });
}

export default new PostsApi({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Cross-Origin': 'true',
	},
});

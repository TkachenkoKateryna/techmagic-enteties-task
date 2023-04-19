const postsList = document.querySelector('.posts-list');
const postTemplate = document.getElementById('single-post');

export class Post {
	constructor(post) {
		this.id = post.id;
		this.title = post.title;
		this.body = post.body;
		this.userId = post.userId;
	}

	render = (deletePost) => {
		const postEl = document.importNode(postTemplate.content, true);

		postEl.querySelector('h2').textContent = this.title.toUpperCase();
		postEl.querySelector('p').textContent = this.body;
		postEl.querySelector('li').id = this.id;
		postEl
			.querySelector('.btn-del')
			.addEventListener('click', async (event) => {
				const li = event.target.parentNode;
				await deletePost(li.id);
				li.remove();
			});

		postsList.append(postEl);
	};
}

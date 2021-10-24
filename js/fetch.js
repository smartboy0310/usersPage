
async function getUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		
		const data = await response.json();
		if (data) {
			renderUser(data, elUserList);
			}
	} catch (err) {
		console.log(err);
	}
}
/*async function getAllUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		
		const data = await response.json();
		if (data) {
			renderUserShortInfo(data, elUserListPost)
			}
	} catch (err) {
		console.log(err);
	}
}
*/
async function getPost (link) {
	try {
		const responsePost = await fetch(link);
		
		const dataPost = await responsePost.json();
		if (dataPost) {
			renderPost(dataPost, elUserListPost);	
		}
	} catch (err) {
		console.log(err);
	}
}
async function getComment (link) {
	try {
		const resComment = await fetch(link);
		
		const dataComment = await resComment.json();
		
		if (dataComment) {
			renderComment(dataComment, elUserListComment)
		}
	} catch (err) {
		console.log(err);
	}
}

getUsers()


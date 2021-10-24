const token = window.localStorage.getItem('token');

if (!token) {
	window.location.replace('login.html');
}

const elForm = document.querySelector('.form');
//const elSearchInput = document.querySelector('.user__input-search');
//const elSelectCompany = document.querySelector('.user__select-company');
//const elOptionCompany = document.querySelector('.user__option-company');
const elUserList = document.querySelector('.users__list');
const elUserListPost = document.querySelector('.users__list-post');
const elUserListComment = document.querySelector('.users__list-comments');
const elUserTemplate = document.querySelector('.user__template').content;
const elUserPostTemplate = document.querySelector('.user__posts').content;
const elUserCommentTemplate = document.querySelector('.user__comments').content;

const company = [];
let allData = [];
/*elForm.addEventListener('submit', (evt)=> {
	evt.preventDefault();
	const searchInputValue = elSearchInput.value.trim();
	elSearchInput.value = null;
})
*/                                          
elUserList.addEventListener('click', (evt)=> {	 
	const isUser = evt.target.matches('.user');
	if	
	(isUser){
		const userId = evt.target.dataset.userId;
		const link = 'https://jsonplaceholder.typicode.com/posts?userId='+`${userId}`;
		elUserListComment.innerHTML = null;
		getPost(link)
	}
})
elUserListPost.addEventListener('click', (evt)=> {
	const isPost = evt.target.matches('.post');
	if(isPost){
		const postId = evt.target.dataset.userId;
		const link = 'https://jsonplaceholder.typicode.com/comments?postId='+`${postId}`;
		getComment(link)
		
	}
})



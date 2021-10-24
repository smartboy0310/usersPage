function renderUser (arr, node) {
   elUserList.innerHTML = null;
   const userFragment = document.createDocumentFragment();
   arr.forEach((row)=>{
      
      const userTemplate = elUserTemplate.cloneNode(true);
      userTemplate.querySelector('.user').dataset.userId = row.id;
      userTemplate.querySelector('.user__fullname').textContent = row.name;
      userTemplate.querySelector('.user__name').textContent ='user name: '+  row.username;
      userTemplate.querySelector('.user__email').href = 'mailto:'+row.email;
      userTemplate.querySelector('.user__email').textContent = 'email: '+row.email;
      userTemplate.querySelector('.user__address-street').textContent ='street: '+ row.address.street;
      userTemplate.querySelector('.user__address-suite').textContent = 'suite: ' + row.address.suite;
      userTemplate.querySelector('.user__address-city').textContent = 'city: ' + row.address.city;
      userTemplate.querySelector('.user__address-zipcode').textContent = 'zipcode: ' + row.address.zipcode;
      userTemplate.querySelector('.user__address-geo').href = "https://www.google.com/maps/place/" +
      `${row.address.geo.lat}`+','+`${row.address.geo.lng}`
    
      userTemplate.querySelector('.user__phone').href = 'tel:'+row.phone;
      userTemplate.querySelector('.user__phone').textContent = 'phone: '+row.phone;
      userTemplate.querySelector('.user__company-name').textContent = "company: "+ row.company.name;
      userTemplate.querySelector('.user__company-catchphrase').textContent = "Phrase: "+ row.company.catchPhrase;
      userTemplate.querySelector('.user__company-bs').textContent = "bs: "+ row.company.bs;
      userTemplate.querySelector('.user__website').href = 'website: ' + row.website;
      userTemplate.querySelector('.user__website').textContent = 'website: ' + row.website;
      userFragment.appendChild(userTemplate);
   })
   node.appendChild(userFragment);
}


/*
function renderUserShortInfo (arr, node) {
   elUserListPost.innerHTML = null;
   const userPostFragment = document.createDocumentFragment();
   arr.forEach((row)=> {
      if(!company.includes(row.company.name)){
         company.push(row.company.name);
      }
      allData.push(row);
      const userPostTemplate = elUserPostTemplate.cloneNode(true);
      userPostTemplate.querySelector('.post').dataset.userId = row.id; 
      userPostTemplate.querySelector('.user__short--fullname').textContent = row.name;
      userPostTemplate.querySelector('.user__info').textContent = row.username + ', '+ row.company.name;
      userPostTemplate.querySelector('.user__short--email').href = 'mailto:'+row.email;
      userPostTemplate.querySelector('.user__short--email').textContent = row.email;
      userPostTemplate.querySelector('.user__short--website').href = 'website: ' + row.website;
      userPostTemplate.querySelector('.user__short--website').textContent =row.website;
      userPostFragment.appendChild(userPostTemplate);
      
   })
   node.appendChild(userPostFragment);
}
*/


function renderPost (arr, node) {
   elUserListPost.innerHTML = null;
   const userPostFragment = document.createDocumentFragment();
   arr.forEach((row)=> {
      const userPostTemplate = elUserPostTemplate.cloneNode(true);
      userPostTemplate.querySelector('.post').dataset.userId = row.id;
      userPostTemplate.querySelector('.post-heading').textContent = row.title;
      userPostTemplate.querySelector('.post-paragraph').textContent = row.body;
      userPostFragment.appendChild(userPostTemplate);
   })
   node.appendChild(userPostFragment);
}

function renderComment (arr, node) {
   elUserListComment.innerHTML = null;
   const userCommentFragment = document.createDocumentFragment();
   arr.forEach((row)=> {
      const userCommentTemplate = elUserCommentTemplate.cloneNode(true);
      userCommentTemplate.querySelector('.comment-heading').textContent = row.name;
      userCommentTemplate.querySelector('.user__email-comment').href = 'mailto:'+row.email;
      userCommentTemplate.querySelector('.user__email-comment').textContent ='email: ' + row.email;
      userCommentTemplate.querySelector('.comment-paragraph').textContent = row.body;
      userCommentFragment.appendChild(userCommentTemplate);
   })
   node.appendChild(userCommentFragment);
}
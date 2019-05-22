import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load:
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post:
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Get Posts
function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

// Submit Post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title, 
    body
  }

  // Create Post
  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post Added', 'alert alert-success');
    ui.clearFields();
    getPosts();
  })
  .catch(err => console.log(err));
}

// Delete Post
function deletePost(e) {
  e.preventDefault();
  // We want to target the parent element with the class delete
  if(e.target.parentElement.classList.contains('delete')) {
    // Because we have a data-id attribute in the html (with which we can tell which post is which post) we say .dataset.id (this will get the data-id attribute)
    const id = e.target.parentElement.dataset.id;
    // Once we get this, lets make a confirm if they are sure they want to delete:
    if(confirm('Are you sure?')) {
      // If sure, make request:
      http.delete(`http://localhost:3000/posts/${id}`)
        // This will give us a promise back so we say:
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          // Get remaining posts again:
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

// Enable Sdit State
function enableEdit(e) {
  // We have to go to the parent again:
  if(e.target.parentElement.classList.contains('edit')) {
    // if so then we want to get all the post info, and we can get that through the target
    const id = e.target.parentElement.dataset.id;
    // We also need to get the title and body:
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    // Lets create a data var and put all this stuff in it:
    const data = {
      id,
      title,
      body
    }

    // Fill form with current post
    ui.fillForm(data);
  }
  e.preventDefault();
}
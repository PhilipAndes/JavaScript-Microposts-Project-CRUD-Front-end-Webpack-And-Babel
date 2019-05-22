class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    // Show all posts
    showPosts(posts) {
        let output = '';

        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>

                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        this.post.innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {
        this.clearAlert();

        // Create div:
        const div = document.createElement('div');
        // Add classes:
        div.className = className;
        // Add text:
        div.appendChild(document.createTextNode(message));
        // Get parent 
        const container = document.querySelector('.postsContainer');
        // Get posts div
        const posts = document.querySelector('#posts');
        // Insert alert div
        container.insertBefore(div, posts);

        // Timeout (clear alert after 3 seconds)
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        // Test if there is any alert:
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear all fields
    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    // Fill form to edit
    fillForm(data) {
        // These should all be .value, because they are form fields:
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value =  data.id;
    }
}

export const ui = new UI();
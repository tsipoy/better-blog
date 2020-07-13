console.log('it works');

// Grabbing elements

const cardForm = document.querySelector('#post-list');
const form = document.querySelector('#post-form');
const postTitle = document.querySelector('#postTitle');
const submitButton = document.querySelector('.btn-primary');
const postContent = document.querySelector('textarea');
const postAuthor = document.querySelector('[name="postAuthor"]');
const errorMessage = document.querySelector('#error-message');
const hideForm = document.querySelector('#show-form');
const newCard = document.getElementById('form-card');
const card = document.querySelector('.card');
postContent.classList.add('post-content');

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    const date = new Date();
    const myNewHtml = `
    <div class="card">
        <div class="card-body">
            <img src="https://picsum.photos/500/200">
            <h5>${postTitle.value} <small>by ${postAuthor.value}</small></h5>
            <p>${postContent.value}</p>
            <button type="button" class="btn btn-sm btn-light btn-delete">
							Delete entry
						</button>
					</div>
					<div class="card-footer text-muted">
						${date}
					</div>
        </div>
    </div>
    `;
    cardForm.innerHTML += myNewHtml;

    form.reset();
});

postContent.addEventListener('input', ($event) => {
    if($event.target.value.split(" ").length < 20) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

hideForm.addEventListener('click', ($event) => {
    
    if($event.target === 'true') {
    newCard.classList.add('block');
    } else {
        newCard.classList.add('hidden');
        hideForm.textContent = 'show form'; 
    
}
});

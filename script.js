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
        <img class="card-img-top"src="https://picsum.photos/500/200" alt="beautiful random image"/>
        <h5>${postTitle.value} <small>by ${postAuthor.value}</small></h5>
        <p class="card-text">${postContent.value}</p>
        <button type="button" class="btn btn-sm btn-light btn-delete">
			Delete entry
		</button>
		<div class="card-footer text-muted">
			${date.toLocaleDateString()}
		</div>
    </div>
    `;
    // cardForm.innerHTML += myNewHtml;
    cardForm.insertAdjacentHTML('afterbegin', myNewHtml);

    form.reset();
});



postContent.addEventListener('input', ($event) => {
    if($event.target.value.split(" ").length < 20) {
        errorMessage.style.display = 'block';
        submitButton.setAttribute('disable', 'true');
    } else {
        errorMessage.style.display = 'none';
        submitButton.setAttribute('disable', 'false');
    }
});


// Hide and show form 

const toggleForm = () => {
    if (newCard.classList.contains('hidden')) {
        newCard.classList.remove('hidden');
        hideForm.textContent = 'Hide form';
    } else {
        newCard.classList.add('hidden');
        hideForm.textContent = 'Add a post';
    }
}
hideForm.addEventListener('click', toggleForm);

// Delete button 


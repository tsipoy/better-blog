console.log('it works');

// Grabbing elements

const cardForm = document.querySelector('#post-list');
console.log(cardForm);
const form = document.querySelector('#post-form');
const postTitle = document.querySelector('#postTitle');
const submitButton = document.querySelector('.btn-primary');
const postContent = document.querySelector('textarea');
const postAuthor = document.querySelector('[name="postAuthor"]');
const errorMessage = document.querySelector('#error-message');
const hideForm = document.getElementById('show-form');
const newCard = document.getElementById('form-card');

postContent.classList.add('post-content');

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    const myNewHtml = `
    <div class="card">
        <div class="card-body">
            <img src="https://picsum.photos/500/200">
            <h5>${postTitle.value} by ${postAuthor.value}</h5>
            <p>${postContent.value}</p>
        </div>
        <div class="card-footer text-muted>
            10/07/2020
        </div>
    </div>
    `;
    cardForm.innerHTML += myNewHtml;

    form.reset();
});

postContent.addEventListener('input', ($event) => {
    if($event.target.value.length < 20) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

hideForm.addEventListener('click', ($event) => {
    if($event.target)
    newCard.style.display = 'none';
});

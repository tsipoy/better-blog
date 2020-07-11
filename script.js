console.log('it works');

// When the user click hide form, the form is hidden
    //newCard.style.display = 'none';
   // hideForm.style.display = 'none';
//});

//addPost.addEventListener('click', ($event) => {
    //if($event.target)
    //newCard.style.display = 'block';
    //hideForm.style.display = 'block';
//});


const hideForm = document.getElementsByClassName('.hidden');
const newCard = document.getElementById('form-card');
const cardForm = document.querySelector('#form-card');
const form = document.querySelector('form');
const postTitle = document.querySelector('#postTitle');
const submitButton = document.querySelector('.btn-primary');
const postContent = document.querySelector('textarea');
const postAuthor = document.querySelector('[name="postAuthor"]');
const errorMessage = document.querySelector('#error-message');

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


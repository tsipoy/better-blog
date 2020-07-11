console.log('it works');

// Hiding form

const hideForm = document.getElementById('show-form');
const newCard = document.getElementById('form-card');

hideForm.addEventListener('click', ($event) => {
    if($event.target)
    newCard.style.display = 'none';
});
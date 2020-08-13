// Init le service email.js
(function(){
      emailjs.init("user_Oh3MDSKAXr7QKxi8tVi7C");
   })();

// Selectionne le btn
const btn = document.querySelector('#submit');
const msg = document.querySelector('#msg');

// Ajout un event
btn.addEventListener('click',(e)=>{
   e.preventDefault(); // empêche de refresh la pagex
   emailjs.sendForm('gmail', 'template_LJAhOJLf', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    // Envoie l'email


    btn.classList.add('d-none');
    msg.classList.remove('d-none');
    // camoufle le btn et mets le text à la place
})

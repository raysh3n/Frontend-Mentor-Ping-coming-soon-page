'use strict'


const input=document.querySelector('input');
const button = document.querySelector('button');
const errorDesc=document.querySelector('.error');

const emailPattern = /^[a-zA-Z0-9.*%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener('click',(event)=>{

    event.preventDefault();
    const result = input.value.trim();

    if (input.type === 'email' && emailPattern.test(result)) {

            Swal.fire({
                icon: "success",
                title: "Congratulations!",
                html: `Please check your email's inbox for confirmation!`
            });

            errorDesc.classList.add('hide');
            input.classList.remove('highlightError');

            document.querySelector("form").reset();

    } else {
        input.classList.add('highlightError');
        errorDesc.classList.remove('hide');
    }
});



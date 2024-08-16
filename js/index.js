const input = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type="submit"]');


const state = {fullName: false, email: false, birthdate: false, password: false};

function enableSubmit() {
    if (state.fullName && state.email && state.birthdate && state.password) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function changeDesign(msg, border, input, error) {
    error.textContent = msg;
    input.style.border = border;
}

const fullNameRes = (state, input, error) => {
    let msg, border;
    if (!state) {
        msg = 'must not contain numerical numbers';
        border = '2px solid var(--red-error, red)'; 
    } else {
        msg = '';
        border = '2px solid var(--green, green)';
    }
    input.style.backgroundColor = 'rgb(245, 245, 245)';

    if (input.value === '') {
        msg = '';
        border = 'none';
        input.style.backgroundColor = '#d4d4d4';
    }
    changeDesign(msg, border, input, error);
}

const emailRes = (state, input, error) => {
    let msg, border;
    if (!state) {
        msg = 'example@email.com';
        border = '2px solid var(--red-error, red)'; 
    } else {
        msg = '';
        border = '2px solid var(--green, green)';
    }
    input.style.backgroundColor = 'rgb(245, 245, 245)';

    if (input.value === '') {
        msg = '';
        border = 'none';
        input.style.backgroundColor = '#d4d4d4';
    }
    changeDesign(msg, border, input, error);
}

const birthdateRes = (state) => {

}

const passwordRes = (state) => {

}

input.forEach(inp => {
    inp.addEventListener('input', () => {
        console.log(inp.checkValidity());
        // console.log(inp.value)
        const validity = inp.checkValidity();
        const errorSelector = document.querySelector(`label[for='${inp.id}'] p.error-msg`);

        if (inp.id === 'full-name') {
            fullNameRes(validity, inp, errorSelector);
        } 
        else if (inp.id === 'email') {
            emailRes(validity, inp, errorSelector);
        } 
        else if (inp.id === 'birthdate') {
            birthdateRes(validity, inp, errorSelector);
        } 
        else if (inp.id === 'password') {
            passwordRes(validity, inp, errorSelector);
        }

        enableSubmit();
    })
})






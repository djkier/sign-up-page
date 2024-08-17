const input = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type="submit"]');
const now = new Date();
const year =now.getFullYear();

const statusBtn = {fullName: false, email: false, birthdate: false, password: false};

function enableSubmit() {
    if (statusBtn.fullName && statusBtn.email && statusBtn.birthdate && statusBtn.password) {
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
        msg = 'must not contain numbers';
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
    statusBtn.fullName = state;
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
    statusBtn.email = state;
}

const birthdateRes = (state, input, error) => {
    const yearBirth = input.value.split('-')[0];
    const age = year - yearBirth;

    let msg = '';
    let border = '2px solid var(--green, green)';

    if (age < 12 || age > 80) {
        state = false;
        msg = 'Age must be 12-80 years old';
        border = '2px solid var(--red-error, red)';
    } 
    
    if (age < 0) {
        msg = 'Future Person? ' + msg; 
    } 
    console.log(input.value === '');
    if (input.value === '') {
        msg = '';
        border = 'none';
        input.style.backgroundColor = '#d4d4d4';
    }

    changeDesign(msg, border, input, error);
    statusBtn.birthdate = state;
    


}

const passwordRes = (state) => {

}

input.forEach(inp => {
    inp.addEventListener('input', () => {
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






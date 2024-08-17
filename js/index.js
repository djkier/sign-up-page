const input = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type="submit"]');
const spanCaps = document.createElement('span');
const spanNumb = document.createElement('span');
const spanSpCh = document.createElement('span');
const showPass = document.querySelector('.para img');

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

function spanColor(trgt, clr) {
    trgt.style.color = clr;
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
    input.style.backgroundColor = 'rgb(245, 245, 245)';


    if (input.value === '') {
        msg = '';
        border = 'none';
        input.style.backgroundColor = '#d4d4d4';
    }

    changeDesign(msg, border, input, error);
    statusBtn.birthdate = state;
    


}

const passwordRes = (state, input, error) => {
    const testForCapital = /[A-Z]+/.test(input.value);
    const testForNumber = /\d+/.test(input.value);
    const testForSpCh = /[!@#$%^&*(),.?":{}|<>]/.test(input.value);

    let msg = ''
    let border = '2px solid var(--red-error, red)'; 
    state = false;

    if (input.value.length < 8){
        msg = 'Must contain atleast 8 characters'
    } 

    if (testForCapital && testForNumber && testForSpCh && input.value.length >= 8){
        state = true;
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

    if (!state && input.value.length >= 8) {
        const green = 'var(--green, green)';
        const red = 'var(--red-error, red)';
        console.log('enter here')
        error.textContent = '';
        spanCaps.textContent = 'Capital Letter, ';
        spanNumb.textContent = 'Number, ';
        spanSpCh.textContent = 'Special Char';
        error.append(spanCaps, spanNumb, spanSpCh);

        testForCapital ? spanColor(spanCaps, green) : spanColor(spanCaps, red);
        testForNumber ? spanColor(spanNumb, green) : spanColor(spanNumb, red);
        testForSpCh ? spanColor(spanSpCh, green) : spanColor(spanSpCh, red);
    }

    statusBtn.password = state;
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
            showPass.style.visibility = inp.value.length > 0 ? 'visible' : 'hidden'; 
            
        }

        enableSubmit();
    })
})
let show = false;

showPass.addEventListener('click', () => {
    if (show) {
        document.querySelector('#password').type = 'text';
        showPass.src = './src/show.png'
    } else {
        document.querySelector('#password').type = 'password';
        showPass.src = './src/unshow.png'
    }

    show = !show;
})








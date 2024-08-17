
const shadow = document.querySelector('.sign-up-container');
const body = document.querySelector('body');

shadow.addEventListener('mousemove', (e) => {
    let xShadow, yShadow;
    let x = e.clientX;
    let y = e.clientY;


    xShadow = Math.floor(-1*x/24 + 175/8) + 4;
    yShadow = Math.floor(-1*y/15 + 74/3) + 2;


    shadow.style.boxShadow = `${xShadow}px ${yShadow}px 4px 0px rgba(0,0,0,0.24)`;
  
})


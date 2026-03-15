const wrapper = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');
counter.textContent = 0;
wrapper.addEventListener('click', function(e) {
    const btns = e.target.parentElement.children;
    for (let i = 0; i < btns.length; i++ ) {
      btns[i].textContent = 'Нажми меня';
    }
    e.target.textContent = 'Нажата!';      
    counter.textContent++;
});


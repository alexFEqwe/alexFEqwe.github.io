let headerActiveClass = document.getElementById('header');

document.getElementById('jsBurger')
    .addEventListener('click', function(){
        headerActiveClass.classList.toggle('header__mobile');
    });
document.getElementById('backdrop')
    .addEventListener('click', function(){
        headerActiveClass.classList.remove('header__mobile');
    });
window.addEventListener('resize', function() {
    if(window.innerWidth >= 440) {
        headerActiveClass.classList.remove('header__mobile');
    }
});

const arrow = document.getElementById('topbutton');

arrow.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({top:0, behavior: 'smooth'});

});

function updateTopArrow() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled > 0) {
        arrow.classList.remove('hidden');
    } else {
        arrow.classList.add('hidden');
    }
}

window.addEventListener('scroll', updateTopArrow);
updateTopArrow();
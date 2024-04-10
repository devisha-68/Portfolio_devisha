function myMenu() {
    var menu_btn = document.getElementById('my_menu');

    if (menu_btn.className === "nav_menu") {
        menu_btn.className += " responsive";
    }
    else {
        menu_btn.className = "nav_menu";
    }
}

/* Dark mode */
const logo = document.getElementsByClassName('nav_logo');

const body = document.querySelector('body')
toggleSwitch = document.getElementById('toogle_switch');

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle("dark");

    logo[0].style.filter = 'drop-shadow(2px 6px 8px #fff)';
})


/* Typing effect */

var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Coder", "Learner"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})



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


/* Scroll animation */

const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})


sr.reveal(".featured_name", { delay: 100 });
sr.reveal(".text_info", { delay: 200 });
sr.reveal(".text_btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured_image", { delay: 320 });

sr.reveal(".project_box", { interval: 200 });

sr.reveal(".top_header", {});

const srLeft = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about_info", { delay: 100 });
srLeft.reveal(".contact_info", { delay: 100 });


const srRight = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill_box", { delay: 100 });

/* Active link */

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // corrected assignment
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_menu a[href*='" + sectionId + "']").classList.add("active_link");
        } else {
            document.querySelector(".nav_menu a[href*='" + sectionId + "']").classList.remove("active_link"); 
        }
    });
}

window.addEventListener("scroll", scrollActive);
let sections = document.querySelectorAll('section');
let taasLinks = document.querySelectorAll('.taas, .taas-labas');

window.onscroll = () => {
    sections.forEach((sec, index) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
            taasLinks[index].classList.add('active');
        } else {
            sec.classList.remove('show-animate');
            taasLinks[index].classList.remove('active');
        }
    });
};

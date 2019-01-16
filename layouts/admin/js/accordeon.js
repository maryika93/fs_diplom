const headers = Array.from(document.querySelectorAll('.conf-step__header'));
headers.forEach(header => header.addEventListener('click', () => {
  header.classList.toggle('conf-step__header_closed');
  header.classList.toggle('conf-step__header_opened');
}));

const films = document.querySelectorAll('.conf-step__movie');
console.log(films);
let icon = null;
films.forEach(film =>{
    let icon = null;

    film.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('conf-step__movie')) {
            icon = event.target;
            icon.classList.add('moving');
            icon.style.position = 'absolute';
            console.log(event);
            moveAt(event);
            document.body.appendChild(icon);
        }
    });
    film.addEventListener('mousemove', (event) => {
        if (!icon) {
            return;
        }
        icon.style.left = event.pageX - icon.offsetWidth / 2 + 'px';
        icon.style.top = event.pageY - icon.offsetHeight / 2 + 'px';
    });

    film.addEventListener('mouseup', (event) => {
        if (icon) {
            icon = null;
        }
    });

});

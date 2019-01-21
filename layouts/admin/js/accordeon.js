const headers = Array.from(document.querySelectorAll('.conf-step__header'));
headers.forEach(header => header.addEventListener('click', () => {
  header.classList.toggle('conf-step__header_closed');
  header.classList.toggle('conf-step__header_opened');
}));

//const films = document.querySelectorAll('.conf-step__movie');

let icon = null;
let delFilmIcon = null;

document.addEventListener('mousedown', (event) => {
    let film = event.path[0].cloneNode(true);
    if (film.classList.value == "conf-step__movie") {
        icon = film;
        icon.classList.add('moving');
        icon.style.position = 'absolute';
        moveAt(event);
        document.body.appendChild(icon);
    }
    if (film.classList.value == "conf-step__seances-movie") {
        delFilmIcon = event.path[0];
        icon = film;
        icon.classList.add('moving');
        icon.style.position = 'absolute';
        moveAt(event);
        document.body.appendChild(icon);
    }

    if(event.target.closest('.popup_film') === null){
        document.querySelector('.popup_film').style.display = 'none';
    }

    if(event.target.closest('.popupAddConf') === null){
        document.querySelector('.popupAddConf').style.display = 'none';
    }

    if(event.target.closest('.popupDelConf') === null){
        document.querySelector('.popupDelConf').style.display = 'none';
    }

    if(event.target.closest('.popupAddFilm') === null){
        document.querySelector('.popupAddFilm').style.display = 'none';
    }

    if(event.target.closest('.popupDelFilm') === null){
        document.querySelector('.popupDelFilm').style.display = 'none';
    }
});

document.addEventListener('mousemove', (event) => {
    if (!icon) {
        return;
    }
    icon.style.left = event.pageX - icon.offsetWidth / 2 + 'px';
    icon.style.top = event.pageY - icon.offsetHeight / 2 + 'px';
});

document.addEventListener('mouseup', (event) => {
    if (icon) {
            const check = document
                .elementFromPoint(event.clientX, event.clientY)
                .closest('.conf-step__seances-hall');
            icon.classList.remove('moving');
            if(icon.classList.contains("conf-step__movie")) {
            if (check) {
                delFilmIcon = null;
                icon.style.display = 'none';
                let popup = document.querySelector('.popup_film');
                popup.style.display = 'block';
                document.querySelector('.popup_select').value = check.querySelector('.conf-step__seances-title').innerText;
            }
        } else {
                if (!check) {
                    icon.style.display = 'none';
                    let popup = document.querySelector('.popupDelFilm');
                    popup.style.display = 'block';
                }
        }
        icon = null;
    }
});

function moveAt(e) {
    icon.style.left = e.pageX - icon.offsetWidth / 2 + 'px';
    icon.style.top = e.pageY - icon.offsetHeight / 2 + 'px';
}

document.querySelector('.addConf').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.popupAddConf').style.display='block';
});

let del = document.querySelectorAll('.delConf');
del.forEach(d => {
    d.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.popupDelConf').style.display='block';
    });
});

document.querySelector('.addFilm').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.popupAddFilm').style.display='block';
});


let close = document.querySelectorAll('.close');
close.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
            document.querySelector('.popup_film').style.display = 'none';
            document.querySelector('.popupAddConf').style.display = 'none';
            document.querySelector('.popupDelConf').style.display = 'none';
            document.querySelector('.popupAddFilm').style.display = 'none';
            document.querySelector('.popupDelFilm').style.display = 'none';
    })
});

let delFilm = document.querySelector('.delFilm');
delFilm.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(delFilmIcon);
        delFilmIcon.parentNode.removeChild(delFilmIcon);
    document.querySelector('.popupDelFilm').style.display = 'none';
    delFilmIcon = null;
});
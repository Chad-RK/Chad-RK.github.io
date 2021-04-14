'use strict';

let mainimg = document.querySelector('img');
let dark = document.createElement('div');
dark.className = 'darkness';

function toggleFS() {
    mainimg.classList.toggle('fullscreen');
    if (mainimg.classList.contains('fullscreen')) {
        document.body.appendChild(dark);
    } else {
        document.body.removeChild(dark);
    }
}

mainimg.addEventListener('click', toggleFS);
dark.addEventListener('click', toggleFS)
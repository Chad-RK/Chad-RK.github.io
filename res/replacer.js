'use strict';
let buttons = document.querySelector('.variants').children;

let img = document.querySelector('img');
let src = img.src.slice(img.src.lastIndexOf('/')+1);

function replaceImg(e) {
    let el = e.target;
    let link = el.getAttribute('data-img');
    let sliced = img.src.slice(img.src.lastIndexOf('/')+1);

    let yes = (link == sliced);
    console.log(link, sliced);

    for (let button of buttons) {
        button.classList.add('disabled');
    }

    if (yes) {
        img.src = src;
    } else {
        img.src = link;
        el.classList.remove('disabled');
    }
}

for (let button of buttons) {
    button.setAttribute(
        'data-img',
        button.href.slice(
            button.href.lastIndexOf('/')+1,
            button.href.lastIndexOf('.')
        )+'.png'
    );
    button.href = '#';
    button.addEventListener('click', replaceImg);
}
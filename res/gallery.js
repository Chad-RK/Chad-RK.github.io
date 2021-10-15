'use strict';

let gallery = document.querySelector('.gallery');
let kinkLists = document.querySelectorAll('.legend');

let disabledKinks = ['slob']

function buttonToggle(e) {
    let el = e.target;
    let kink = '';
    // get kink
    for (let x of el.classList) {
        if (x !== 'disabled') {
            kink = x;
            break;
        }
    }
    if (kink == '') { throw Error; }

    let kinkPos = disabledKinks.indexOf(kink);

    if (kinkPos == -1) {
        // add kink to list
        disabledKinks.push(kink);
        el.classList.add('disabled');
    } else {
        // remove kink from list
        disabledKinks.splice(kinkPos, 1);
        el.classList.remove('disabled');
    }

    updateVisibleKinks();
}

function updateVisibleKinks() {
    for (let element of gallery.children) {
        let hide = false;
        for (let el of element.querySelector('.markers').children) {
            for (let item of disabledKinks) {
                if (el.classList.contains(item)) {
                    hide = true;
                    break;
                }
            }
        }
        element.style.visibility = hide ? 'hidden' : 'visible';
    }
}

function main() {
    for (let kinkList of kinkLists) {
        for (let element of kinkList.children) {
            for (let x of disabledKinks) {
                if (element.classList.contains(x)) {
                    element.classList.add('disabled');
                }
            }
            element.addEventListener('click', buttonToggle);
        }
    }
    updateVisibleKinks();
}

main();
'use strict';

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

    let kinkpos = disabledKinks.indexOf(kink);

    if (kinkpos == -1) {
        // add kink to list
        disabledKinks.push(kink);
        el.classList.add('disabled');
    } else {
        // remove kink from list
        disabledKinks.splice(kinkpos, 1);
        el.classList.remove('disabled');
    }

    updateVisibleKinks();
}

function updateVisibleKinks() {
    for (let element of document.querySelector('.gallery').children) {
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
    for (let element of document.querySelector('.legend').children) {
        for (let x of disabledKinks) {
            if (element.classList.contains(x)) {
                element.classList.add('disabled');
            }
        }
        element.addEventListener('click', buttonToggle);
    }

    updateVisibleKinks();
}

main();
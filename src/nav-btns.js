import {default as createAboutUs} from "./aboutUs";
import {default as createMenu} from './menu';

function setNavBtns() {
    let menuOpened = false;
    document.querySelector('#menu-btn').addEventListener("click", () => {
        if (menuOpened == false) {
            document.querySelector('#menu-content').classList.add('show');
            document.querySelector('#menu-btn').classList.add('menu-btn-bold');
            menuOpened = true;
        } else {
            document.querySelector('#menu-content').classList.remove('show');
            document.querySelector('#menu-btn').classList.remove('menu-btn-bold');
            menuOpened = false;
        }
    });
    window.addEventListener('click', (event) => {
        if (menuOpened == true && !document.querySelector('#menu-btn').contains(event.target)) {
            document.querySelector('#menu-content').classList.remove('show');
            document.querySelector('#menu-btn').classList.remove('menu-btn-bold');
            menuOpened = false;
        }
    })
    
    let aboutUsOpened = false;
    document.querySelector('#about-btn').addEventListener("click", () => {
        if (aboutUsOpened == false) {
            document.querySelector('#about-content').classList.add('show');
            document.querySelector('#about-btn').classList.add('menu-btn-bold');
            aboutUsOpened = true;
        } else {
            document.querySelector('#about-content').classList.remove('show');
            document.querySelector('#about-btn').classList.remove('menu-btn-bold');
            aboutUsOpened = false;
        }
    });
    window.addEventListener('click', (event) => {
        if (aboutUsOpened == true && !document.querySelector('#about-btn').contains(event.target)) {
            document.querySelector('#about-content').classList.remove('show');
            document.querySelector('#about-btn').classList.remove('menu-btn-bold');
            aboutUsOpened = false;
        }
    })
    
    document.querySelector('#full-menu').addEventListener('click', () => createMenu());
    document.querySelector('#our-history').addEventListener("click", () => createAboutUs());
    return [menuOpened, aboutUsOpened];
}

export default setNavBtns;
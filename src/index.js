import {default as createHomePage} from './homepage';
import {default as setNavBtns} from './nav-btns';

import './style.css';

import logo from './components/homepage/logo-1.png'
import orderNowPhoto from './components/homepage/order_now.png';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
  
window.onload = () => {
    setNavBtns();
    let orderBtn = document.querySelector('#order-now');
    orderBtn.innerHTML = '<img id="order-now-photo">';
    document.querySelector('#order-now-photo').setAttribute('src', orderNowPhoto);
    orderBtn.addEventListener('click', () => {
        window.location = 'https://www.mcdonaldsapps.com/en-HK/?appUrl=gmalite://gmalite-marketpicker'
    });

    let homepageLogo = document.querySelector('#logo');
    homepageLogo.innerHTML = '<img id="logo-photo">';
    document.querySelector('#logo-photo').setAttribute('src', logo);
    
    homepageLogo.addEventListener('click', () => {
        createHomePage();
    });

    createHomePage();
};

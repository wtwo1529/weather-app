import news1 from './components/homepage/homepage_img1.jpg';
import news2 from './components/homepage/homepage_img2.jpg';
import news3 from './components/homepage/homepage_img3.jpg';

import img1 from './components/homepage/img-slideshow1.jpg';
import img2 from './components/homepage/img-slideshow2.jpg';
import img3 from './components/homepage/img-slideshow3.jpg';
import img4 from './components/homepage/img-slideshow4.jpg';
import img5 from './components/homepage/img-slideshow5.jpg';

import img6 from './components/homepage/more_info1.jpg';

function changeImg(i) {
    if (typeof(document.getElementById('homepage')) != undefined) {
    let images = [img1, img2, img3, img4, img5];
    let time = 3000;
    
    const headerImg = document.querySelector('.header-img');
    if (headerImg) {
        headerImg.setAttribute("src", images[i]);
        i = (i+1) % images.length;
        setTimeout(() => changeImg(i), time);
        }
    }
    return;
}

function createHomePage() {    
    let news = document.createElement('div');
    news.classList.add('news');
    
    let app1 = document.createElement('button');
    app1.classList.add('app');
    app1.id = "app1"
    app1.setAttribute('type', 'button');
    app1.innerHTML = '<img id="news-img1" class="news-imgs"> <h1 class="news-header">McDonald\'s App</h1> <p>McDonald’s App Exclusive offer! Weekly free coupon worth more than $200!</p>';
    
    let app2 = document.createElement('button');
    app2.classList.add('app');
    app2.id = "app2"
    app2.setAttribute('type', 'button');
    app2.innerHTML = '<img id="news-img2" class="news-imgs"><h1 class="news-header">McDonald\'s App</h1><p>McDonald\'s App Dine-In Delivery Service - Scan ‧ Order ‧ Enjoy!</p>';
    
    let app3 = document.createElement('button');
    app3.classList.add('app');
    app3.id = "app3"
    app3.setAttribute('type', 'button');
    app3.innerHTML = '<img id="news-img3" class="news-imgs"><h1 class="news-header">McCafé</h1><p>We pride on bringing you quality coffee. Every cup is freshly prepared with passion, dedication, and an obsessive attention to detail.</p>'
    
    let appFiller = document.createElement('div');
    appFiller.classList.add('app');
    appFiller.id = 'app-filler';

    news.appendChild(app1);
    news.appendChild(app2);
    news.appendChild(app3);
    news.appendChild(appFiller);

    let moreInformation = document.createElement('div');
    
    let aboutOurFood = document.createElement('div');
    // aboutOurFood.innerHTML = '<img class="more-info-img" id="about-our-food"><h1>About Our Food</h1><p>Same as our customers, McDonald\'s is highly concerned towards food safety</p>';
    // document.querySelector('#about-our-food').setAttribute('src', img6);

    document.querySelector('.header-img-container').innerHTML = '<img class="header-img" id="homepage">'
    document.querySelector('.header-img').setAttribute('src', img1);

    let content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(news);

    document.querySelector('#news-img1').setAttribute('src', news1);
    document.querySelector('#news-img2').setAttribute('src', news2);
    document.querySelector('#news-img3').setAttribute('src', news3);
    
    let i = 0;
    changeImg(i);
}

export default createHomePage; 
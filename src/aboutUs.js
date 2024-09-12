import headerImg from './components/aboutUs/header-img.jpg'

function createAboutUs() {
    document.querySelector('.header-img-container').innerHTML = '<img class="header-img">';
    document.querySelector('.header-img').setAttribute('src', headerImg);
    let content = document.querySelector('#content');
    content.innerHTML = '';
}

export default createAboutUs;
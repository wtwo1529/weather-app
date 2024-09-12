import fullMenu from './components/menu/fullMenu.png';
import burgerImg from './components/menu/burger.png';
import breakfastImg from './components/menu/breakfast.png';
import valuePicksImg from './components/menu/value-picks.png';
import snacksSidesImg from './components/menu/snacks-and-sides.png';
import saladsImg from './components/menu/salads.png';
import dessertsImg from './components/menu/desserts.png';
import beveragesImg from './components/menu/beverages.png';
import mccafeImg from './components/menu/mccafe.png';
import signatureImg from './components/menu/signature.png';
import happyMealImg from './components/menu/happy-meal.png';
import extraValueImg from './components/menu/extra-value-meals.png';
import extraValueBreakfastsImg from './components/menu/extra-value-breakfasts.png';

import './menu.css';

function createMenu() {
    document.querySelector('.header-img-container').innerHTML = '';
    let contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    let body = document.createElement('div');
    body.id = 'body';

    let sideBar = document.createElement('div');
    sideBar.id = 'sidebar';

    let currentPage = document.createElement('a');
    currentPage.classList.add('sidebar-module')
    currentPage.id = 'current-page';
    let currentPageImg = document.createElement('img');
    currentPageImg.setAttribute('src', fullMenu);
    currentPageImg.classList.add('sidebar-icon')
    let currentPageText = document.createElement('p');
    currentPageText.innerText = 'View Full Menu';
    currentPageText.classList.add('sidebar-text')

    currentPage.appendChild(currentPageImg);
    currentPage.appendChild(currentPageText);

    sideBar.appendChild(currentPage);

    let otherFood = document.createElement('div');
    otherFood.id = 'foodbar';
    sideBar.appendChild(otherFood);

    let burgers = document.createElement('div');
    burgers.classList.add('sidebar-module');

    let burgersImg = document.createElement('img');
    burgersImg.setAttribute('src', burgerImg);
    burgersImg.classList.add('sidebar-icon');

    let burgersText = document.createElement('p');
    burgersText.innerText = 'Burgers';
    
    burgersText.classList.add('sidebar-text');

    burgers.appendChild(burgersImg);
    burgers.appendChild(burgersText);

    otherFood.appendChild(burgers);

    let breakfast = document.createElement('div');
    breakfast.classList.add('sidebar-module');

    let breakfastIcon = document.createElement('img');
    breakfastIcon.setAttribute('src', breakfastImg);
    breakfastIcon.classList.add('sidebar-icon');

    let breakfastText = document.createElement('p');
    breakfastText.innerText = 'Breakfast Platter and Twisty Pasta';
    
    breakfastText.classList.add('sidebar-text');

    breakfast.appendChild(breakfastIcon);
    breakfast.appendChild(breakfastText);

    otherFood.appendChild(breakfast);

    let valuePicks = document.createElement('div');
    valuePicks.classList.add('sidebar-module');

    let valuePicksIcon = document.createElement('img');
    valuePicksIcon.setAttribute('src', valuePicksImg);
    valuePicksIcon.classList.add('sidebar-icon');

    let valuePicksText = document.createElement('p');
    valuePicksText.innerText = 'Value Picks';
    
    valuePicksText.classList.add('sidebar-text');

    valuePicks.appendChild(valuePicksIcon);
    valuePicks.appendChild(valuePicksText);

    otherFood.appendChild(valuePicks);

    let snacksSides = document.createElement('div');
    snacksSides.classList.add('sidebar-module');

    let snacksSidesIcon = document.createElement('img');
    snacksSidesIcon.setAttribute('src', snacksSidesImg);
    snacksSidesIcon.classList.add('sidebar-icon');

    let snacksSidesText = document.createElement('p');
    snacksSidesText.innerText = 'Snacks and Sides';
    
    snacksSidesText.classList.add('sidebar-text');

    snacksSides.appendChild(snacksSidesIcon);
    snacksSides.appendChild(snacksSidesText);

    otherFood.appendChild(snacksSides);

    let salads = document.createElement('div');
    salads.classList.add('sidebar-module');

    let saladsIcon = document.createElement('img');
    saladsIcon.setAttribute('src', saladsImg);
    saladsIcon.classList.add('sidebar-icon');

    let saladsText = document.createElement('p');
    saladsText.innerText = 'Salads';
    
    saladsText.classList.add('sidebar-text');

    salads.appendChild(saladsIcon);
    salads.appendChild(saladsText);

    otherFood.appendChild(salads);

    let desserts = document.createElement('div');
    desserts.classList.add('sidebar-module');

    let dessertsIcon = document.createElement('img');
    dessertsIcon.setAttribute('src', dessertsImg);
    dessertsIcon.classList.add('sidebar-icon');

    let dessertsText = document.createElement('p');
    dessertsText.innerText = 'Desserts';
    
    dessertsText.classList.add('sidebar-text');

    desserts.appendChild(dessertsIcon);
    desserts.appendChild(dessertsText);

    otherFood.appendChild(desserts);

    let beverages = document.createElement('div');
    beverages.classList.add('sidebar-module');

    let beveragesIcon = document.createElement('img');
    beveragesIcon.setAttribute('src', beveragesImg);
    beveragesIcon.classList.add('sidebar-icon');

    let beveragesText = document.createElement('p');
    beveragesText.innerText = 'Beverages';
    
    beveragesText.classList.add('sidebar-text');

    beverages.appendChild(beveragesIcon);
    beverages.appendChild(beveragesText);

    otherFood.appendChild(beverages);

    let mccafe = document.createElement('div');
    mccafe.classList.add('sidebar-module');

    let mccafeIcon = document.createElement('img');
    mccafeIcon.setAttribute('src', mccafeImg);
    mccafeIcon.classList.add('sidebar-icon');

    let mccafeText = document.createElement('p');
    mccafeText.innerText = 'McCafe';
    
    mccafeText.classList.add('sidebar-text');

    mccafe.appendChild(mccafeIcon);
    mccafe.appendChild(mccafeText);

    otherFood.appendChild(mccafe);

    let signature = document.createElement('div');
    signature.classList.add('sidebar-module');

    let signatureIcon = document.createElement('img');
    signatureIcon.setAttribute('src', signatureImg);
    signatureIcon.classList.add('sidebar-icon');

    let signatureText = document.createElement('p');
    signatureText.innerText = 'The Signature Collection';
    
    signatureText.classList.add('sidebar-text');

    signature.appendChild(signatureIcon);
    signature.appendChild(signatureText);

    otherFood.appendChild(signature);

    let happyMeal = document.createElement('div');
    happyMeal.classList.add('sidebar-module');

    let happyMealIcon = document.createElement('img');
    happyMealIcon.setAttribute('src', happyMealImg);
    happyMealIcon.classList.add('sidebar-icon');

    let happyMealText = document.createElement('p');
    happyMealText.innerText = 'Happy Meals';
    
    happyMealText.classList.add('sidebar-text');

    happyMeal.appendChild(happyMealIcon);
    happyMeal.appendChild(happyMealText);

    otherFood.appendChild(happyMeal);

    let extraValueMeals = document.createElement('div');
    extraValueMeals.classList.add('sidebar-module');

    let extraValueMealsIcon = document.createElement('img');
    extraValueMealsIcon.setAttribute('src', extraValueImg);
    extraValueMealsIcon.classList.add('sidebar-icon');

    let extraValueMealsText = document.createElement('p');
    extraValueMealsText.innerText = 'Extra Value Meals';
    
    extraValueMealsText.classList.add('sidebar-text');

    extraValueMeals.appendChild(extraValueMealsIcon);
    extraValueMeals.appendChild(extraValueMealsText);

    otherFood.appendChild(extraValueMeals);

    let extraValueBreakfasts = document.createElement('div');
    extraValueBreakfasts.classList.add('sidebar-module');

    let extraValueBreakfastsIcon = document.createElement('img');
    extraValueBreakfastsIcon.setAttribute('src', extraValueBreakfastsImg);
    extraValueBreakfastsIcon.classList.add('sidebar-icon');

    let extraValueBreakfastsText = document.createElement('p');
    extraValueBreakfastsText.innerText = 'Extra Value Breakfasts';
    
    extraValueBreakfastsText.classList.add('sidebar-text');

    extraValueBreakfasts.appendChild(extraValueBreakfastsIcon);
    extraValueBreakfasts.appendChild(extraValueBreakfastsText);

    otherFood.appendChild(extraValueBreakfasts);

    let menu = document.createElement('div');
    menu.id = 'menu';

    let menuHeader1 = document.createElement('h1');
    menuHeader1.innerText = 'Meals and Value';
    menuHeader1.setAttribute('class', 'menu-header')
    
    let mealsValue = document.createElement('div');
    mealsValue.classList.add('menu-category');

    let happyMeals = document.createElement('div');
    happyMeals.classList.add('menu-module');
    let happyMealsImg = document.createElement('img');
    happyMealsImg.setAttribute('src', happyMealImg);
    happyMealsImg.classList.add('menu-img');
    let happyMealsHeader = document.createElement('p');
    happyMealsHeader.classList.add('sub-header');
    happyMealsHeader.innerText = 'Happy Meals';
    
    happyMeals.appendChild(happyMealsImg);
    happyMeals.appendChild(happyMealsHeader);

    let evMeals = document.createElement('div');
    evMeals.classList.add('menu-module');
    let evMealsImg = document.createElement('img');
    evMealsImg.setAttribute('src', extraValueImg);
    evMealsImg.classList.add('menu-img');
    let evMealsHeader = document.createElement('p')
    evMealsHeader.classList.add('sub-header');
    evMealsHeader.innerText = "Extra Value Meals";
    
    evMeals.appendChild(evMealsImg)
    evMeals.appendChild(evMealsHeader)
    
    let evBreakfasts = document.createElement('div');
    evBreakfasts.classList.add('menu-module');
    let evBreakfastsImg = document.createElement('img');
    evBreakfastsImg.setAttribute('src', extraValueBreakfastsImg)
    evBreakfastsImg.classList.add('menu-img');
    let evBreakfastsHeader = document.createElement('p');
    evBreakfastsHeader.classList.add('sub-header')
    evBreakfastsHeader.innerText = 'Extra Value Breakfasts';

    evBreakfasts.appendChild(evBreakfastsImg);
    evBreakfasts.appendChild(evBreakfastsHeader);

    mealsValue.appendChild(happyMeals);
    mealsValue.appendChild(evMeals);
    mealsValue.appendChild(evBreakfasts);

    menu.appendChild(menuHeader1);
    menu.appendChild(mealsValue);

    let alacarteHeader = document.createElement('h1');
    alacarteHeader.innerText = 'A-la-carte';
    alacarteHeader.classList.add('menu-header');

    menu.appendChild(alacarteHeader);

    let alacarte = document.createElement('div');
    alacarte.classList.add('menu-category');

    let burgersMenu = document.createElement('div');
    burgersMenu.classList.add('menu-module');
    let burgersMenuImg = document.createElement('img');
    burgersMenuImg.setAttribute('src', burgerImg);
    burgersMenuImg.classList.add('menu-img');
    let burgersMenuHeader = document.createElement('p');
    burgersMenuHeader.classList.add('sub-header');
    burgersMenuHeader.innerText = 'Burgers';
    
    burgersMenu.appendChild(burgersMenuImg);
    burgersMenu.appendChild(burgersMenuHeader);

    alacarte.appendChild(burgersMenu);

    let breakfastMenu = document.createElement('div');
    breakfastMenu.classList.add('menu-module');
    let breakfastMenuImg = document.createElement('img');
    breakfastMenuImg.setAttribute('src', breakfastImg);
    breakfastMenuImg.classList.add('menu-img');
    let breakfastMenuHeader = document.createElement('p');
    breakfastMenuHeader.classList.add('sub-header');
    breakfastMenuHeader.innerText = 'Breakfast Platter and Twisty Pasta';
    
    breakfastMenu.appendChild(breakfastMenuImg);
    breakfastMenu.appendChild(breakfastMenuHeader);

    alacarte.appendChild(breakfastMenu);

    let valuePicksMenu = document.createElement('div');
    valuePicksMenu.classList.add('menu-module');
    let valuePicksMenuImg = document.createElement('img');
    valuePicksMenuImg.setAttribute('src', valuePicksImg);
    valuePicksMenuImg.classList.add('menu-img');
    let valuePicksMenuHeader = document.createElement('p');
    valuePicksMenuHeader.classList.add('sub-header');
    valuePicksMenuHeader.innerText = 'Value Picks';
    
    valuePicksMenu.appendChild(valuePicksMenuImg);
    valuePicksMenu.appendChild(valuePicksMenuHeader);

    alacarte.appendChild(valuePicksMenu);

    let snacksSidesMenu = document.createElement('div');
    snacksSidesMenu.classList.add('menu-module');
    let snacksSidesMenuImg = document.createElement('img');
    snacksSidesMenuImg.setAttribute('src', snacksSidesImg);
    snacksSidesMenuImg.classList.add('menu-img');
    let snacksSidesMenuHeader = document.createElement('p');
    snacksSidesMenuHeader.classList.add('sub-header');
    snacksSidesMenuHeader.innerText = 'Snacks and Sides';
    
    snacksSidesMenu.appendChild(snacksSidesMenuImg);
    snacksSidesMenu.appendChild(snacksSidesMenuHeader);

    alacarte.appendChild(snacksSidesMenu);

    let saladsMenu = document.createElement('div');
    saladsMenu.classList.add('menu-module');
    let saladsMenuImg = document.createElement('img');
    saladsMenuImg.setAttribute('src', saladsImg);
    saladsMenuImg.classList.add('menu-img');
    let saladsMenuHeader = document.createElement('p');
    saladsMenuHeader.classList.add('sub-header');
    saladsMenuHeader.innerText = 'Salads';
    
    saladsMenu.appendChild(saladsMenuImg);
    saladsMenu.appendChild(saladsMenuHeader);

    alacarte.appendChild(saladsMenu);
    
    let dessertsMenu = document.createElement('div');
    dessertsMenu.classList.add('menu-module');
    let dessertsMenuImg = document.createElement('img');
    dessertsMenuImg.setAttribute('src', dessertsImg);
    dessertsMenuImg.classList.add('menu-img');
    let dessertsMenuHeader = document.createElement('p');
    dessertsMenuHeader.classList.add('sub-header');
    dessertsMenuHeader.innerText = 'Salads';
    
    dessertsMenu.appendChild(dessertsMenuImg);
    dessertsMenu.appendChild(dessertsMenuHeader);

    alacarte.appendChild(dessertsMenu);

    let beveragesMenu = document.createElement('div');
    beveragesMenu.classList.add('menu-module');
    let beveragesMenuImg = document.createElement('img');
    beveragesMenuImg.setAttribute('src', beveragesImg);
    beveragesMenuImg.classList.add('menu-img');
    let beveragesMenuHeader = document.createElement('p');
    beveragesMenuHeader.classList.add('sub-header');
    beveragesMenuHeader.innerText = 'Beverages';
    
    beveragesMenu.appendChild(beveragesMenuImg);
    beveragesMenu.appendChild(beveragesMenuHeader);

    alacarte.appendChild(beveragesMenu);

    let mcCafeMenu = document.createElement('div');
    mcCafeMenu.classList.add('menu-module');
    let mcCafeMenuImg = document.createElement('img');
    mcCafeMenuImg.setAttribute('src', mccafeImg);
    mcCafeMenuImg.classList.add('menu-img');
    let mcCafeMenuHeader = document.createElement('p');
    mcCafeMenuHeader.classList.add('sub-header');
    mcCafeMenuHeader.innerText = 'McCafé';
    
    mcCafeMenu.appendChild(mcCafeMenuImg);
    mcCafeMenu.appendChild(mcCafeMenuHeader);

    alacarte.appendChild(mcCafeMenu);

    let fillerMenu = document.createElement('div');
    fillerMenu.classList.add('menu-module');
    alacarte.appendChild(fillerMenu);

    menu.append(alacarte);

    body.appendChild(sideBar);
    body.appendChild(menu);

    contentDiv.appendChild(body);

}

export default createMenu;
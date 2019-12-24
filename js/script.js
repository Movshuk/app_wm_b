window.onload = function() {
    // btn
    let btnToggleMenu = document.querySelector('.btn-toggle');
    let menuLeft = document.querySelector('.menu-sidebar');
    let menuRight = document.querySelector('.menu-right');

    menuRight.onmouseover = menuRightShow;
    menuRight.onmouseout = menuRightHide;

    btnToggleMenu.onclick = function(){
        menuLeft.classList.toggle('active');
    }

    function menuRightShow() {
        menuRight.style.right = '0';
    }

    function menuRightHide() {
        menuRight.style.right = '-300px';
    }
}


// Right menu
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

tab();

// right menu radio

let countries = document.querySelectorAll('path');
let elementsRightMenu = document.querySelectorAll('#right-radio-btn');

for(let i = 0; i < elementsRightMenu.length; i++) {
    elementsRightMenu[i].addEventListener('change', function() {
        if(elementsRightMenu[i].checked) {

            showWorld();
            switch(elementsRightMenu[i].value) {
                case 'Мир':
                    showWorld();
                    break;
                case 'ЕАЭС':
                    showEAC(getEacCounties());
                    break;
                case 'BRICS':
                    showBrics(getBricsCounties());
                    break;
                default:
                    showWorld();
                    break;
            }
        }
    });
}

function getEacCounties(){
    let arrEac = [];
    let ruCountry = document.querySelector('path[id="RU"]');
    let byCountry = document.querySelector('path[id="BY"]');
    let kzCountry = document.querySelector('path[id="KZ"]');
    let amCountry = document.querySelector('path[id="AM"]');
    let kgCountry = document.querySelector('path[id="KG"]');
    
    arrEac.push(ruCountry);
    arrEac.push(byCountry);
    arrEac.push(kzCountry);
    arrEac.push(amCountry);
    arrEac.push(kgCountry);

    return arrEac;

}
function getBricsCounties(){
    let arrEac = [];
    let ruCountry = document.querySelector('path[id="RU"]');
    let cnCountry = document.querySelector('path[id="CN"]');
    let brCountry = document.querySelector('path[id="BR"]');
    let inCountry = document.querySelector('path[id="IN"]');
    let zaCountry = document.querySelector('path[id="ZA"]');
    
    arrEac.push(ruCountry);
    arrEac.push(cnCountry);
    arrEac.push(brCountry);
    arrEac.push(inCountry);
    arrEac.push(zaCountry);

    return arrEac;

}

function showEAC(arr) {

    for(let i = 0; i < arr.length; i++){
        arr[i].classList.add('eac');
    }
}

function showBrics(arr) {

    for(let i = 0; i < arr.length; i++){
        arr[i].classList.add('brics');
    }
}

function showWorld() {
    for(let i = 0; i < countries.length; i++){
        countries[i].classList.remove('eac');
    }

    for(let i = 0; i < countries.length; i++){
        countries[i].classList.remove('brics');
    }
}
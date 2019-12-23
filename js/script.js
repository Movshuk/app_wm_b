window.onload = function() {
    // btn
    let btnToggleMenu = document.querySelector('.btn-toggle');
    btnToggleMenu.onclick = showMenu;
    // // menu
    let menu = document.querySelector('.menu-sidebar');

    function showMenu() {
        menu.style.left = '0px';
    }

    function hideMenu() {
        menu.style.left = '-250px';
    }


    // btnToggleMenu.onclick = function(){
    //     menu.classList.toggle('active');
    // }
}
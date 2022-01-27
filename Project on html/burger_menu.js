const btn = document.querySelector(  '.burger_menu') ;
const menu = document.querySelector(  '.nav' ) ;
const burger = document.querySelector(  '.burger_menu_item' );
btn.onclick = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
}

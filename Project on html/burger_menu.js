const btn = document.querySelector(  '.burger_menu') ;
const menu = document.querySelector(  '.nav' ) ;
const burger = document.querySelector(  '.burger_menu_item' );
const scroll = document.querySelector(  'body' );
btn.onclick = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    scroll.classList.toggle("lock");
}

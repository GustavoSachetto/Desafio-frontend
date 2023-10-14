$(document).ready(function() {
   
    const menu = $('#menu');
    const img = $('#img-menu');
    const nav = $('nav');

    menu.click(() => {
        nav.toggleClass('ativo');
        if (nav.attr('class') == 'ativo') {
            img.attr('src', 'images/icon-close.svg');
        } else {
            img.attr('src', 'images/icon-hamburger.svg');
        }
    });
    
});
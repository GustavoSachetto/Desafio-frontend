$(document).ready(function() {
   
    const menu = $('#menu');
    const nav = $('nav');

    menu.click(() => {
        nav.toggleClass('ativo');
    });
    
});
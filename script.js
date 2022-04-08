// Animasi scroolTop
$(document).ready(() => {
    $('#up').on('click', () => {
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
    });
});
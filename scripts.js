$(document).ready(function() {
    $(window).on('resize', resizeHoneycomb);
    resizeHoneycomb();
});

function resizeHoneycomb() {
    const $honeycombWrapper = $('.honeycomb-wrapper');
    const $item = $honeycombWrapper.find('.item');
    const honeycombColumns = Math.floor($honeycombWrapper.innerWidth() / $item.innerWidth());
    $honeycombWrapper.attr('data-honeycomb-columns', (honeycombColumns > 5) ? 5 : honeycombColumns);
}

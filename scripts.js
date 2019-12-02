$( document ).ready(function() {
    const $honeycombWrapper = $('.honeycomb-wrapper');
    const $item = $honeycombWrapper.find('.item');

    $(window).on('resize', resizeHoneycomb);
    resizeHoneycomb();

    function resizeHoneycomb() {
        const honeycombColumns = Math.floor($honeycombWrapper.innerWidth() / $item.innerWidth());
        $honeycombWrapper.attr('data-honeycomb-columns', (honeycombColumns > 5) ? 5 : honeycombColumns);
    }
});

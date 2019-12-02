$(document).ready(resizeHoneycomb);

$(window).on('resize', resizeHoneycomb);

function resizeHoneycomb() {
    // get the grid wrapper
    const $honeycombWrapper = $('.honeycomb-wrapper');
    // get the grid item
    const $item = $honeycombWrapper.find('.item');
    // get number of columns in the grid
    const honeycombColumns = Math.floor($honeycombWrapper.innerWidth() / $item.innerWidth());
    // update honeycomb columns attribute (limited to 5)
    $honeycombWrapper.attr('data-honeycomb-columns', (honeycombColumns > 5) ? 5 : honeycombColumns);
}

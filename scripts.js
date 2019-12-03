$(document).ready(resizeHoneycomb);

$(window).on('resize', resizeHoneycomb);

function resizeHoneycomb() {
    // get the grid list
    const $honeycombList = $('.honeycomb-list');
    // get the grid item
    const $honeycombItem = $honeycombList.find('.item');
    // get number of columns in the grid
    const honeycombColumns = Math.floor($honeycombList.innerWidth() / $honeycombItem.innerWidth());
    // update honeycomb columns attribute
    $honeycombList.attr('data-honeycomb-columns', honeycombColumns);
}

let honeycombLists;

document.addEventListener("DOMContentLoaded", function(){
    honeycombLists = document.getElementsByClassName('honeycomb-list');
    honeycombResize();
});

window.addEventListener("resize", honeycombResize);

function honeycombResize(){
    for (let honeycomb of honeycombLists) {
        const honeycombItems = honeycomb.getElementsByClassName('item');
        const honeycombColumns = Math.floor(honeycomb.clientWidth / honeycombItems[0].clientWidth);
        honeycomb.setAttribute('data-honeycomb-columns', honeycombColumns);
    }
}

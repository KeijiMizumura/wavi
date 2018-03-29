
var sideButton = document.getElementById('mobileNav');
var hideButton = document.getElementById('closeButton');

// SHOW NAV
sideButton.addEventListener('click',function(){
    var sideNav = document.getElementById('side-nav');
    sideNav.style.left = '0px';
});

// HIDE NAV
hideButton.addEventListener('click',function(){
    var sideNav = document.getElementById('side-nav');
    sideNav.style.left = '-310px';
});
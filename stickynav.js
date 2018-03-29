
// THE STICKY NAV
window.onscroll = function () { myFunction() };

var theNav = document.getElementById('content-header');
var sticky = theNav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        theNav.classList.add("sticky");
    }
    else {
        theNav.classList.remove("sticky");
    }
}
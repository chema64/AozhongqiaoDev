


var linkT = document.getElementById('inv');


if(linkT !== null) {

    //console.log(linkT);

    var removeHref = function() {
        linkT.removeAttribute("href");
        //console.log(linkT);
    }

    var setHref = function() {
        linkT.setAttribute("href", linkT.getAttribute("test-href"));
        //console.log(linkT);
    }

/*    var clickFunc = function() {
        window.location.href = this.getAttribute("test-href");
    }*/

    linkT.addEventListener('mouseover', removeHref);
    linkT.addEventListener('mouseleave', setHref);
 //   linkT.addEventListener('click', clickFunc);

}

var openedWindow;

function openWindow() {
    openedWindow = window.open("../inv/inv.html");
}

function closeCurrentWindow() {
    window.close();
}












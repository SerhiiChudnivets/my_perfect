document.getElementById("page").onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY-88 + "px";
    document.getElementById("magnify").style.left = e.pageX-88 + "px";
}
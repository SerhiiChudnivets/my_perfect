document.getElementById("page").onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY + "px";
    document.getElementById("magnify").style.left = e.pageX + "px";
}
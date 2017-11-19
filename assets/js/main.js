function draw_together() {
    document.getElementById("right").style.width = "50vw";
    document.getElementById("left").style.width = "50vw";
}

function draw_apart() {
    document.getElementById("right").style.width = "0";
    document.getElementById("left").style.width = "0";
}

window.onscroll = function () {
    if (window.scrollY != 0) {
        draw_together();
        document.getElementById("brand").style.opacity = 1;
        document.getElementById("wrapper").style.height = "0";
        document.getElementById("cover").style.background = "rgba(0,0,0,0.3)";

    } else {
        draw_apart();
        document.getElementById("brand").style.opacity = 0;
        document.getElementById("wrapper").style.height = "100vh";
        document.getElementById("cover").style.background = "rgba(0,0,0,0.6)";
    }
};

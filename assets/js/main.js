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
        document.getElementById("cover").style.background = "rgba(171,185,194,0.5)";
        document.getElementById("logo-bottom").style.opacity = 0;
        document.getElementById("curtains").style.boxShadow = "0px 0px 2vh 2px #2d5068";
        document.getElementById("cover").style.height = "auto";
        document.getElementById("wrapper").style.paddingTop = "15vh";
    } else {
        draw_apart();
        document.getElementById("brand").style.opacity = 0;
        document.getElementById("wrapper").style.height = "100vh";
        document.getElementById("cover").style.background = "rgba(0,0,0,0.6)";
        document.getElementById("logo-bottom").style.opacity = 1;
        document.getElementById("curtains").style.boxShadow = "none";
        document.getElementById("wrapper").style.paddingTop = "25vh";
    }
};

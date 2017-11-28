function draw_together() {
    if (screen.width <= 1080) document.getElementById("header").style.backgroundColor = "#003948";
    else {
        document.getElementById("right").style.width = "50vw";
        document.getElementById("left").style.width = "50vw";
    }
}

function draw_apart() {
    if (screen.width <= 1080) document.getElementById("header").style.background = "none";
    else {
        document.getElementById("right").style.width = "0";
        document.getElementById("left").style.width = "0";
    }
}

window.onscroll = function () {
    if (window.scrollY != 0) {
        draw_together();
        document.getElementById("brand").style.opacity = 1;
        if (screen.width > 1080) document.getElementById("wrapper").style.height = "0";
        document.getElementById("cover").style.background = "rgba(234,237,239,0.6)";
        document.getElementById("logo-bottom").style.opacity = 0;
        document.getElementById("curtains").style.boxShadow = "0px 0px 2vh 2px #2d5068";
        document.getElementById("cover").style.height = "auto";
        if (screen.width > 1080) document.getElementById("wrapper").style.paddingTop = "15vh";
    } else {
        draw_apart();
        document.getElementById("brand").style.opacity = 0;
        if (screen.width > 1080) document.getElementById("wrapper").style.height = "100vh";
        document.getElementById("cover").style.background = "rgba(0,0,0,0.6)";
        document.getElementById("logo-bottom").style.opacity = 1;
        document.getElementById("curtains").style.boxShadow = "none";
        if (screen.width > 1080) document.getElementById("wrapper").style.paddingTop = "25vh";
    }
};

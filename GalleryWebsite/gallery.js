function navBar() {
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    var x = document.getElementById("myLinks");

    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
        x.style.opacity = "0";
        x.style.transition = "0.2s";
        bar1.style.transform = "rotate(0deg)";
        bar2.style.transform = "translateX(0)";
        bar3.style.transform = "rotate(0deg)";

    } else {
        x.style.visibility = "visible";
        x.style.opacity = "1";

        bar1.style.transform = "rotate(-30deg) translateX(-0.5rem) translateY(0.1rem)";
        bar2.style.transform = "translateX(0.5rem) translateY(0.3rem)";
        bar3.style.transform = "rotate(30deg) translateX(0rem) translateY(0.4rem)";
    }
}
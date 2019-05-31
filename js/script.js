document.addEventListener("DOMContentLoaded", inicializacion);

function inicializacion() {

    mostrarUrl();
    window.addEventListener("scroll", fixFooter, )
    window.addEventListener("s")
}

function mostrarUrl() {
    //Muestra los url de las redes sociales
    var fb = document.getElementById("fb");
    var ig = document.getElementById("ig");
    var ws = document.getElementById("ws");

    mouseMov(fb);
    mouseMov(ig);
    mouseMov(ws);


    function mouseMov(red) {

        red.addEventListener("mouseover", function () {
            let nodeRed = document.createElement("a");
            nodeRed.textContent = red.href;
            nodeRed.id = "borrar";
            nodeRed.classList.add("animated", "fadeIn");
            red.appendChild(nodeRed);
        });

        red.addEventListener("mouseout", function () {
            let nodeRed = document.getElementById("borrar");
            red.removeChild(nodeRed);
        });
    }

    function figure(red) {
        red.addEventListener("mouseover", function () {
            red.style = "clip-path: polygon(0 0, 91% 0, 100% 14%, 100% 91%, 90% 100%, 0 100%, 0 100%, 0 0);"
        })
    }

}

function fixFooter(){
    var foot = document.getElementById("fixFooter");
    var topNav = foot.offsetTop;
    console.log(foot.offsetTop, window.scrollY);

    if (window.scrollY <= 956 ) {
        foot.style = "position: fixed;"
        foot.classList.add("animated", "fadeInUp")

    }
    else {
        foot.style = "position: relative;transition-delay:1ms";
        foot.classList.remove("animated", "fadeInUp");
    }
}

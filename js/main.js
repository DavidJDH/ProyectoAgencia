$(document).ready(function(){
    $(window).on("scroll", function(){
        let posicion = $("#pr").offset()
        if ($(window).scrollTop() >= posicion.top) {
            $("header").removeClass("transparente");
        }else{
            $("header").addClass("transparente");
        }
    })

    $("#burger").click(function(){
        $("#burger").toggleClass("abierto")
        $(".menu").toggleClass("abierto")
    })
})
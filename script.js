$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    var mensajePersonalizado = "¡Mi lugar favorito siempre sera cuando estoy contigo! 💖"; // Personaliza aquí tu mensaje

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        $("#message").text(mensajePersonalizado); // Agrega el mensaje cuando se abre
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        $("#message").text(""); // Borra el mensaje cuando se cierra
        envelope.addClass("close").removeClass("open");
    }
});

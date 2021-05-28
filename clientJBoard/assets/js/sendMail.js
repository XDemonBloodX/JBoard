$(document).ready(function() {
    $("#myClickSendMail").click(function(e) {
        var object = $("#object").val(),
            text = $("#textF").val();
        if (!object || !text) {
            $(".myAlert").html(
                '<div class="alert alert-danger" role="alert">' +
                "Merci de remplir tout les champs !" +
                "</div>"
            );
            return;
        } else {
            $(".myAlert").empty();
        }
        Email.send({
            Host: "smtp.gmail.com",
            Username: "theimpostors3@gmail.com",
            Password: "Coquelicot3",
            To: "theimpostors3@gmail.com",
            From: "theimpostors3@gmail.com",
            Subject: object,
            Body: text,
        }).then((message) => console.log(message), $(".myAlert").html(
            '<div class="alert alert-success" role="alert">' +
            "Mail envoyé" +
            "</div>"
        ))
    });
});
const myUrl = "http://127.0.0.1:3000";

$("#connection").click(function() {
    let mail = $("#mailCo").val();
    let password = $("#passCo").val();
    let checkLogg1D = $("#stayCo").is(':checked')
    let log1D = "";
    if (!mail || !password) {
        return alert("merci de remplir les champs")
    }
    if (checkLogg1D == true) {
        log1D = "on"
    }
    try {
        $.ajax({
            type: "POST",
            url: myUrl + "/login",
            xhrFields: { withCredentials: true },
            crossDomain: true,
            data: { "email": mail, "password": password, "stayLoggedIn": log1D },
            dataType: 'JSON',
            success: function(data) {
                alert("Vous êtes connectés");
                console.log(data.sid);
                // sessionStorage.setItem('connectsid', data.sid);
                document.cookie = 'connect.sid="' + data.sid + '"';
                console.log(data)
                if (!data.admin) {
                    document.location.href = "../../view/admin.html";
                } else if (!data.company) {
                    document.location.href = "../../view/user.html";
                } else if (!data.user) { document.location.href = "../../view/companie.html"; }
            }
        })

    } catch (error) { alert("Login ou mot de passe incorrect") }


    // 
    // 

})

function lookPassword() {
    var x = document.getElementById("passCo");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
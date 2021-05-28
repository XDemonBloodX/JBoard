$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: myUrl + "/hr/details",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        dataType: 'JSON',
        success: function(data) {
            alert("Vous êtes connectés");
            console.log(data);
            $("#companyName").text(data.name)
            $("#description").text(data.description)
        }
    })
})
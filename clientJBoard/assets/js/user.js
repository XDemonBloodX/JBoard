$(document).ready(function() {
    //infoUser
    $.ajax({
            type: "GET",
            url: myUrl + "/user/details",
            xhrFields: { withCredentials: true },
            crossDomain: true,
            dataType: 'JSON',
            success: function(data) {
                $("#userName").text(data.firstName + " - " + data.lastName)
                $("#userCounty").text("Région: " + data.county)
                $("#userPhone").text("Téléphone: " + data.phoneNumber)
                $("#cv").text("Téléchargement du CV: " + data.resue)
                $("#description").text(data.description)
            }
        })
        //infoUser -> offers follow
    $.ajax({
        type: "GET",
        url: myUrl + "/user/applications",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        dataType: 'JSON',
        success: function(data) {
            data.forEach(value => {
                console.log(value)
                showMyOffer(value.offerID, value.applicationID)
            });

        }
    })
})

function deleteOffers(id) {
    id = id.getAttribute("data-id");
    console.log(id)
    $.ajax({
        type: "DELETE",
        url: myUrl + "/user/applications/" + id,
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success: function() {
            console.log("succes")
        }
    })

}

function showMyOffer(id, applicationID) {
    $.ajax({
        type: "GET",
        url: myUrl + "/offers/" + id,
        xhrFields: { withCredentials: true },
        crossDomain: true,
        dataType: 'JSON',
        success: function(value) {

            console.log(value)
            $("#tableFollowOffers").append(
                '<tr>' +
                '<th scope="row">' + value.offerID + '</th>' +
                '<td>' + value.title + '</td>' +
                '<td>' +
                '<center><button onclick="deleteOffers(this)" data-id="' + applicationID + '" class="btn btn-danger">' +
                '<i class="fas fa-times-circle"></i>' +
                '</button></center>' +
                '</td>' +
                '</tr>'
            )
        }
    })
}
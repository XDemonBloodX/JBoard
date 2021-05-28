$(document).ready(function() {
    try {
        $.ajax({
                url: myUrl + "/offers",
            })
            .done((data) =>
                data.forEach((value) => {
                    sendOffers(value);
                })
            )
    } catch (e) {
        console.log(e)
    }
});

function descrCard(id) {
    let myString = id.getAttribute("data-id");
    myStartString = myString.substring(myString.indexOf("_") + 1, myString.indexOf("_") + 2);
    myEndString = myString.substring(myString.indexOf("-") + 1, myString.length);
    $("#descr_" + myStartString + '>#descriptions>.div').addClass("d-none");

    //block description
    if (myEndString == 'cardDescription') {
        $("#descr_" + myStartString + '>#descriptions>#cardInfoCle').addClass("d-none");

    }
    if (myEndString == "cardInfoCle") {
        $("#descr_" + myStartString + '>#descriptions>#cardDescription').addClass("d-none");
    }
    $("#descr_" + myStartString + '>#descriptions>#' + myEndString).toggleClass("d-none");


}



function moreCards(myValue) {

    //console.log(myValue.getAttribute("data-id"));
    let myString = myValue.getAttribute("data-id");

    myString = myString.substring(myString.indexOf("_") + 1, myString.length);

    $("#descr_" + myString + '>#descriptions>#cardInfoCle').addClass("d-none");
    $("#descr_" + myString + '>#descriptions>#cardEntreprise').addClass("d-none");

    $("#sdescr_" + myString).toggleClass("d-none");
    $("#descr_" + myString).toggleClass("d-block");
}

$("#btnSearch").click(function() {
    var job = $("#searchJob").val();
    county = $("#county").val();
    typeC = $("#typeCJob").val();
    if (!job || !county || !typeC) {
        $(".alertForm").html(
            '<div class="alert alert-danger" role="alert">Un des champs n\'a pas été rempli !</div >'
        );
    }
    $(".alertForm").empty();

    $.ajax({
            url: "http://" + myUrl + "/offers",
        })
        .done((data) =>
            data.forEach((value) => {
                console.log(value);
                sendOffers(value);
            })
        )
});

function addFollow(data) {
    data = data.getAttribute("data-id");
    console.log(data)
    let id = data.substring(data.indexOf("_") + 1, data.length);
    console.log(id)
    $.ajax({
        type: "POST",
        url: myUrl + "/user/offers/" + id,
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success: function() {
            alert("offre ajouté")
        }
    })
}

function searchOffers() {
    let job = $("#searchJob").val()
    let county = $("#county").val()
    let contract = $("#typeCJob").val()
    console.log(job, contract, county)
    $.ajax({
        type: "GET",
        url: myUrl + "/offers/search?job=" + job + "county=" + county + "&contract=" + contract,
        success: function(data) {
            $(".containerOffer").empty()
            data.forEach((value) => {
                sendOffers(value);
            })
        }
    })
}

function sendOffers(value) {
    console.log(value)
    $(".containerOffer").append(
        '<div class="card w-75 mx-auto mt-3">' +
        '<div class="card-body" id="offer_' + value.offerID + '">' +
        '<a data-id="add_' + value.offerID + '" class="btn btn-primary float-right" onclick="addFollow(this)"><strong>FOLLOW</strong></a>' +
        '<div class="row">' +
        '<div id="contentImgCard">' +
        '<img src="/assets/img/dyno-256.jpg" alt="ImageOffers">' +
        '</div>' +
        '<div class=\'myCards\'>' +
        '<h5 class="card-title "><strong> ' + value.contract + '</strong>:' + value.title + '</h5>' +
        '<hr class="col-xs-12 bg-light ">' +
        '<p class="card-text">' +
        '<div id="sdescr_' + value.offerID + '">' + value.shortDescription + ' </div>' +
        '<div class="d-none" id="descr_' + value.offerID + '">' +
        '<button data-id="offer_' + value.offerID + '-cardDescription" type="button" class="btn btn-secondary" onclick="descrCard(this)">Description</button>' +
        '<button data-id="offer_' + value.offerID + '-cardInfoCle" type="button" class="btn btn-info" onclick="descrCard(this)">Mot clés</button>' +
        '<div id="descriptions">' +
        '<div id="cardDescription">' + value.description + '</div>' +
        '<div id="cardInfoCle">' +
        '<u>Tags:</u></br> ' + value.tags +
        '</br><u>Métier:</u>' +
        '</br>' + value.job + '</div>' +
        '</div>' +
        '</div>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<button data-id="offer_' + value.offerID + '" onclick="moreCards(this)" class=" btn bg-danger text-white moreCard ">MORE</button>' +
        '</div>'
    )
}
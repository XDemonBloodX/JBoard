//Side Bar
function openNav() {
    $("#mySidebar").css("width", "250px");
    $("#buttonNav").css("visibility", "hidden");
}

function closeNav() {
    $("#mySidebar").css("width", "0px");
    $("#buttonNav").show();
    $("#buttonNav").css("visibility", "visible");
}

//modal deconnexion
$(".close").click("shown.bs.modal", function() {
    $(".fade").removeClass("show");
    $(".modal-backdrop").css("display", "none");
    $(".modal").css("display", "none");
});

$(document).ready(function() {
    //fader
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    //end Fader
});

//add blur modal
$("#staticBackdrop").on("show.bs.modal", function(e) {
    console.log("show");
    $("body").addClass("modalBlur");
});

//Remove blur modal
$("#staticBackdrop").click("hide.bs.modal", function(e) {
    //console.log("hide");
    $("body").removeClass("modalBlur");
});

$("#btnRegister").click(function() {
    console.log("test");
    document.location.href = "../../view/registerUser.html";
});
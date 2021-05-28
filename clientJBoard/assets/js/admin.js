$(document).ready(function() {
    //NOTE getCompanies
    $.ajax({
            url: myUrl + "/companies",
        })
        .done((d) =>
            d.forEach((value) => {
                $("#companiesListValues").append(
                    "<tr id='comp_" +
                    value.companyID +
                    "'>" +
                    '<th scope = "row">' +
                    value.companyID +
                    "</input>" +
                    "</th>" +
                    "<td>" +
                    "<input value='" +
                    value.name +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<textarea class="form-control" rows="3">' +
                    value.description +
                    "</textarea>" +
                    "</td>" +
                    "<td>" +
                    '<center><button name="comp" data-id="companieDel_' + value.companyID + '" class="btn btn-danger"><i class="fas fa-trash"></i></button></center>' +
                    "</td>" +
                    "<td>" +
                    '<center><button data-id="companie_' + value.companyID + '"class="btn btn-info"><i class="fas fa-pencil-alt"></i></button></center>' +
                    "</td>" +
                    "<" +
                    "td >" +
                    "</tr >"
                );
            })
        )
        .fail("Not access admin");
    //NOTE getOffers
    $.ajax({
            url: myUrl + "/offers",
        })
        .done((O) =>
            O.forEach((valueOff) => {
                $("#offersListValues").append(
                    "<tr id='off_" +
                    valueOff.offerID +
                    "'>" +
                    '<th scope = "row" >' +
                    valueOff.offerID +
                    "</th>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueOff.title +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<textarea class="form - control" rows="3">' +
                    valueOff.shortDescription +
                    "</textarea>" +
                    "</td>" +
                    "<td>" +
                    "<textarea>" +
                    valueOff.description +
                    "</textarea>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueOff.job +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    valueOff.contract +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' type='number' value='" +
                    valueOff.county +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' type='number' value='" +
                    valueOff.salary +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input value='" +
                    valueOff.tags +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input type='date' value='" +
                    valueOff.date +
                    "'</input>" +
                    "</td>" +
                    "</td>" +
                    "<td>" +
                    valueOff.name +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-danger"><i class="fas fa-trash"></i></button></center>' +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-info"><i class="fas fa-pencil-alt"></i></button></center>' +
                    "</td>" +
                    "</tr>"
                );
            })
        )
        .fail("Not access admin");

    //NOTE getUsers
    $.ajax({
            url: myUrl + "/admin/users/details",
        })
        .done((d) =>
            d.forEach((valueUser) => {
                $("#usersListValues").append(
                    "<tr id='user_" +
                    valueUser.offerID +
                    "'>" +
                    '<th scope = "row" >' +
                    valueUser.offerID +
                    "</th>" +
                    "<td>" +
                    valueUser.mail +
                    "</td>" +
                    "<td>" +
                    valueUser.shortDescription +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueUser.firstName +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueUser.lastName +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' type='number' value='" +
                    valueUser.county +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueUser.phoneNumber +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<textarea class="form-control" rows="3">' +
                    valueUser.summary +
                    "</textarea>" +
                    "</td>" +
                    "<td>" +
                    valueUser.profilePic +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-danger"><i class="fas fa-trash"></i></button></center>' +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-info"><i class="fas fa-pencil-alt"></i></button></center>' +
                    "</td>" +
                    "<" +
                    "td >" +
                    "</tr >"
                );
            })
        )
        .fail("Not access admin");
    //NOTE getFollows
    $.ajax({
            url: myUrl + "/admin/applications",
        })
        .done((d) =>
            d.forEach((valueApp) => {
                $("#appListValues").append(
                    "<tr id='follo_" +
                    valueApp.applicationID +
                    "'>" +
                    '<th scope = "row" >' +
                    valueApp.applicationID +
                    "</th>" +
                    "<td>" +
                    valueApp.email +
                    "</td>" +
                    "<td>" +
                    valueApp.isAdmin +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueApp.isInterested +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<textarea class="form-control" rows="3">' +
                    valueApp.message +
                    "</textarea>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueApp.userInfoID +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueApp.offerID +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input type='date' value='" +
                    valueApp.date +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-danger"><i class="fas fa-trash"></i></button></center>' +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-info"><i class="fas fa-pencil-alt"></i></button></center>' +
                    "</td>" +
                    "<" +
                    "td >" +
                    "</tr >"
                );
            })
        )
        .fail("Not access admin");
    //NOTE getuserAll
    $.ajax({
            url: myUrl + "/admin/users",
        })
        .done((d) =>
            d.forEach((valueAll) => {
                $("#usersAllListValues").append(
                    "<tr id='follo_" +
                    valueAll.applicationID +
                    "'>" +
                    '<th scope = "row" >' +
                    valueAll.applicationID +
                    "</th>" +
                    "<td>" +
                    valueAll.email +
                    "</td>" +
                    "<td>" +
                    valueAll.isAdmin +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueAll.isInterested +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<textarea class="form-control" rows="3">' +
                    valueAll.message +
                    "</textarea>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueAll.userInfoID +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input class='input50' value='" +
                    valueApp.offerID +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    "<input type='date' value='" +
                    valueApp.date +
                    "'</input>" +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-danger"><i class="fas fa-trash"></i></button></center>' +
                    "</td>" +
                    "<td>" +
                    '<center><button class="btn btn-info"><i class="fas fa-pencil-alt"></i></button></center>' +
                    "</td>" +
                    "<" +
                    "td >" +
                    "</tr >"
                );
            })
        )
        .fail("Not access admin");
});

function deleteRaw(val) {
    myStartString = val.substring(val.indexOf("_") + 1, val.indexOf("_") + 2);
    $.ajax({
        type: "POST",
        url: myUrl + "/login",
        data: { "email": mail, "password": password, "stayLoggedIn": log1D },
        dataType: 'JSON',
        success: function() {
            alert("Vous êtes connectés");
        }
    })
}
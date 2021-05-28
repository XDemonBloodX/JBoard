$("#btnCreateUser").click(function() {
    $("#formCreateUser").show();
    $("#formCreateCompanie").hide();
})

$("#btnCreateCompanie").click(function() {
    $("#formCreateUser").hide();
    $("#formCreateCompanie").show();
})

$("#formCreateUser").submit(function(event) {
    event.preventDefault(); //prevent default action 
    let mail = $("#mailUser").val();
    let pass = $("#passwordUser").val();

    console.log(mail, pass)
    $.ajax({
        url: myUrl + "/register",
        type: "POST",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        data: {
            "email": mail,
            "password": pass
        },
        dataType: "JSON",
        success: function(data) {
            document.cookie = 'connect.sid="' + data.sid + '";path=/;';
            createUserInfo()
        }
    });
})
$("#formCreateCompanie").submit(function(event) {
    event.preventDefault(); //prevent default action 
    let mail = $("#emailCompanie").val();
    let pass = $("#passwordCompanie").val();

    console.log(mail, pass)
    $.ajax({
        url: myUrl + "/register",
        type: "POST",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        data: {
            "email": mail,
            "password": pass
        },
        dataType: "JSON",
    }).done(function(data) {
        document.cookie = 'connect.sid="' + data.sid + '";path=/;';

        createCompanieInfo()
    });
})

function createUserInfo() {
    console.log("je passe")
    let firstname = $("#firstNameUser").val();
    let lastname = $("#lastNameUser").val();
    let county = $("#countyUser").val();
    let phone = $("#phoneUser").val();
    let resume = $("#resumeUser").val();
    let summary = $("#summaryUser").val();
    let avatar = $("#avatarUser").val();
    console.log(firstname, lastname, county, phone, summary, avatar, resume);
    $.ajax({
        url: myUrl + "/user/details/update",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        type: "POST",
        data: {
            "firstName": firstname,
            "lastName": lastname,
            "county": county,
            "phoneNumber": phone,
            'resume': resume,
            "summary": summary,
            "profilePic": avatar
        },
        dataType: "JSON",
        success: function(data) {
            console.log(data)
            document.location.href = "../../view/homePage.html";
            alert("Vous êtes connectés");
        }
    })
}

function createCompanieInfo() {
    let name = $("#nameCompanie").val();
    let description = $("#descriptionCompanie").val();
    console.log(name, description)
    $.ajax({
        url: myUrl + "/user/company",
        type: "POST",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        data: {
            "name": name,
            "description": description
        },
        dataType: "JSON",
        success: function(data) {
            console.log(data)
            document.location.href = "../../view/homePage.html";
            alert("Vous êtes connectés");
        }
    }).fail((e) => console.log(e));
}


function tableUsersOffers(value) {
    '<table class="table table-striped table-dark">' +
    '<thead class="thead-light">' +
    '<tr>' +
    '<th scope="col">Title</th>' +
    '<th scope="col">Compagnies</th>' +
    '<th scope="col">Interressé</th>' +
    '<th scope="col">Date</th>' +
    '<th scope="col">' +
    '<center><i class="fas fa-edit"></center></i>' +
    '</th>' +
    '' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<th scope="row" class="text-light">' + value.title + '</th>' +
        '<td class="text-light">' + value.name + '</td>' +
        '<td><select class="custom-select mr-sm-2">' +
        '<option selected>Choose...</option>' +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        '</select></td>' +
        '<td class="text-light">' + value.date + '</td>' +
        '<td class="text-light">' +
        '<center><button type="submit" class="btn btn-success"><i' +
        'class="fas fa-edit"></i></button></center>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>'
}
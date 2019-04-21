
var array_of_dom_elements = document.querySelectorAll("input[type=range]");
M.Range.init(array_of_dom_elements);

function ShowHiddenDiv() {
    const custom = document.getElementById("radio-gender");
    const dvtext = document.getElementById("custom-gender");
    dvtext.style.display = custom.checked ? "block" : "none";
}


function ShowHiddenDiv2() {
    const custom = document.getElementById("radio-looking");
    const dvtext = document.getElementById("custom-looking");
    dvtext.style.display = custom.checked ? "block" : "none";
}

document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();

    const customGender = document.getElementById("radio-gender")
    if(customGender.checked) {
        customGender.value=document.getElementById("custom-box1").value;
        // console.log(customGender.value);
    }

    const customLookingFor = document.getElementById("radio-looking")
    if(customLookingFor.checked) {
        customLookingFor.value=document.getElementById("custom-box2").value;
        // console.log(customLookingFor.value);
    }

    const newUser = {
        firstName: $("#first-name").val().trim(),
        lastName: $("#last-name").val().trim(),
        profilePic: $("#profile-pic").val().trim(),
        age: $("#age").val().trim(),
        userGender: $(".user-gender").val().trim(),
        lookingFor: $(".looking-for").val().trim()
    }

    $.post("/api", newUser)
    // On success, run the following code
    .then(function(data) {
      console.log("New User:", data);
    })
    .catch(function(e){
        console.log(e);
    })

})



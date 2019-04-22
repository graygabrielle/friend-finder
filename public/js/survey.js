
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

    
    const surveyAnswers = [];

    for(let i=1; i<17; i++) {
        surveyAnswers.push($(`#q${i}`).val());
    }

    // console.log(surveyAnswers);

    const newUser = {
        firstName: $("#first-name").val().trim(),
        lastName: $("#last-name").val().trim(),
        profilePic: $("#profile-pic").val().trim(),
        age: $("#age").val().trim(),
        userGender: $("input[name='user-gender']:checked").val().trim(),
        lookingFor: $("input[name='lookingFor']:checked").val().trim(),
        surveyAnswers: JSON.stringify(surveyAnswers)
    }

    $.post("/api", newUser)
    // On success, run the following code
    .then(function(data) {
        console.log("data:", data);
      const newUserId = data.id;
      console.log("New User id:", newUserId);
      $.get("/api", newUserId)
        .then(function(res){
          console.log(res);
      })
    })
    .catch(function(e){
        console.log(e);
    })

})



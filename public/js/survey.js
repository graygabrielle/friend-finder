
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
        console.log(data);
        const newUserId = data.id;
        const newUserAnswers = JSON.parse(data.surveyAnswers);
        const newUserGender = data.userGender;
        const newUserLookingFor = data.lookingFor;
        console.log("new user answers: " + newUserAnswers);
        console.log("new user gender: " + newUserGender);
        console.log("new user looking for: " + newUserLookingFor);

      $.get("/api")
        .then(function(res){
            console.log(res);
            let smallestDiff = 0;
            let bestMatch; 
            for(let i=0; i<res.length; i++){
                const user = res[i];
                const userId = user.id;
                const userGender = user.userGender;
                const userLookingFor = user.lookingFor;
                

                if(userId!==newUserId && userGender===newUserLookingFor && userLookingFor===newUserGender){
                    console.log("i hit this");
                    const userAnswers = JSON.parse(res[i].surveyAnswers);
                    let diff = 0;
                    for(let index=0; index<userAnswers.length; index++){
                        diff = diff + Math.abs(parseInt(userAnswers[index])-parseInt(newUserAnswers[index]))
                    }
                    if(diff<smallestDiff || i===0){
                        smallestDiff=diff;
                        bestMatch=user;
                    }
                }
            }
            console.log("best match:", bestMatch);
            
            window.location.replace("/bestmatch.html?id=" + bestMatch.id);

        })
    })
    .catch(function(e){
        console.log(e);
    })

})



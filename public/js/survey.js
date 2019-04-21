

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
        console.log(customGender.value);
    }

})



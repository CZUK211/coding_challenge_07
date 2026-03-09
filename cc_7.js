var input = document.getElementById("headlineInput");

var button = document.getElementById("updateBtn");

var headline = document.getElementById("cta");


function updateHeadline() {

var text = input.value;

if (text != "") {

headline.textContent = text;

}

}


button.addEventListener("click", updateHeadline);
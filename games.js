// URL object helps to work with search paramameters
var baseUrl = new URL("https://games-world.herokuapp.com/games");

function getActivty() {
setTypeFilter();
setParticipantsFilter();

    fetch(baseUrl.href, {method: "GET"})
    .then(
        function(response){
            // parsing the response
            return response.json();
        }
    ).then(
        function(jsonResp) {
            console.log(jsonResp);
            // todo: handle no activity use case
            if(jsonResp.error){
                displayError(jsonResp.error)
            }else{
            displayActivity(jsonResp);
             }
        }
    ).catch(function(error) {
        console.log(error);
        displayError(error);
    })
}

function setTypeFilter() {
    var types = document.getElementsByName("type");
    var selectedType;

    for (var i = 0; i < types.length; i++){
        if(types[i].checked){
            selectedType = types[i].value;
            break;
        }
    }
    if (selectedType) {
        baseUrl.searchParams.set("type", selectedType);
    }
}
/*
function setParticipantsFilter() {
    // todo: get the input value and set the search paramater
    var nrParticipants=document.getElementById("participants").value;
if(nrParticipants){
    baseUrl.searchParams.set("participants",nrParticipants);
}
}

function setPriceFilter() {
    // todo: get the inputs value and set the search paramater
}

function displayActivity(currentActivity) {
    var activity = document.getElementById("activity");
    activity.innerHTML = '';
    var description = document.createElement("p");
    description.innerText = "Description: " + currentActivity.activity;

    var type = document.createElement("p");
    type.innerText = "Type: " + currentActivity.type;

    var participants = document.createElement("p");
    participants.innerText = "Participants: " + currentActivity.participants;

    var price = document.createElement("p");
    price.innerText = "Price: " + currentActivity.price;

    activity.appendChild(description);
    activity.appendChild(type);
    activity.appendChild(participants);
    activity.appendChild(price);
}


function displayError(error) {
    // todo: display the error
var errorDiv=document.getElementById("error");
errorDiv.innerText=error;
}

function getPriceRange(price) {
    // todo: convert the price which is between 0 - 1 into free, $, $$, $$$ sistem
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("activity-button").addEventListener("click", getActivty);
});*/
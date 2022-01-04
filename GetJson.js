function getData(searchName){
$.getJSON(searchName, function(data) {
    // JSON result in data
    
    //set url field
    document.getElementById("site").textContent = "url: " + data.site;

    //set name field
    if(data.hasOwnProperty('name')){
        document.getElementById("name").textContent = "Name: " + data.name;
    }
    else
    {
        document.getElementById("name").textContent = "Name: " + data.site;
    }
    
    //set pronouns field
    if(data.hasOwnProperty('pronouns')){
        document.getElementById("pronouns").textContent = "pronouns: " + data.pronouns;
    }
    else
    {
        document.getElementById("pronouns").textContent = "";
    }
    
    //friends
    if(data.hasOwnProperty('people')){
        document.getElementById("people").textContent = "people: " + data.people;
    }
    else
    {
        document.getElementById("people").textContent = "No friends :(";
    }

    //friend count
    if(data.hasOwnProperty('people')){
        document.getElementById("friendCount").textContent = Object.keys(data.people).length + " friends";
    }
    else
    {
        document.getElementById("friendCount").textContent = "0 friends";
    }



});
}
//rep-tiled.tk//
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

});
}
//rep-tiled.tk//
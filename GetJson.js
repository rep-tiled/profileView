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
    
    //pfp
    if(data.hasOwnProperty('image')){
        document.getElementById('pfp').src=data.image;
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

    //*neos*//

    //neos username
    if(data.extensions.socialMedia.neos.hasOwnProperty('username')){
        document.getElementById("neosName").textContent = "Username: " + data.extensions.socialMedia.neos.username;
        document.getElementById("neosName").hidden = false;
    }
    else
    {
        document.getElementById("neosName").textContent = "NO NEOS ACCOUNT FOUND";
        document.getElementById("neosName").hidden = true;
    }

    //neos user-id
    if(data.extensions.socialMedia.neos.hasOwnProperty('userID')){
        document.getElementById("neosUserID").textContent =  data.extensions.socialMedia.neos.userID;
    }
    else
    {
        document.getElementById("neosUserID").textContent = "";
    }


});
}
//rep-tiled.tk//
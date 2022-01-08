function getData(searchName){
    //clean up
    searchName = decodeURI(searchName);
    searchName = searchName.replace(' ', '');
    $.getJSON(searchName, function(data) {
        // JSON result in data

        //auto hides//
        document.getElementById("Neos").hidden = true;
        document.getElementById("Contacts").hidden = false;
        document.getElementById("site").hidden = false;
        document.getElementById("userBio").hidden = true;
        document.getElementById("CommonSocailMedias").hidden = true;
        document.getElementById("githubLink").hidden = true;
        document.getElementById("twitterLink").hidden = true;

        //set aref
        var aref = data.site;
        if(aref.includes("https://")){}else{aref = "https://" + aref}
    
        document.getElementById('userPhotoLink').href = aref;
    
        //set url field
        document.getElementById("site").textContent = data.site;
        document.title = data.site + "'s profile";
    
        //set name field
        if(data.hasOwnProperty('name')){
            document.getElementById("name").textContent =  data.name;
        }
        else
        {
            document.getElementById("name").textContent =  data.site;
            document.getElementById("site").hidden = true;
        }
        
        //pfp
        if(data.hasOwnProperty('image')){
            document.getElementById('pfp').src=data.image;
        }
        else
        {
            document.getElementById('pfp').src= "https://i.imgur.com/ZVA8eHl.png";
        }
    
        //set pronouns field
        if(data.hasOwnProperty('pronouns')){
            document.getElementById("pronouns").textContent = "(" + data.pronouns + ")";
        }
        else
        {
            document.getElementById("pronouns").textContent = "";
        }
        
        //friends
        if(data.hasOwnProperty('people')){
            document.getElementById("people").textContent = data.people;
        }
        else
        {
            document.getElementById("people").textContent = "No friends :(";
        }
    
        //friend count
        if(data.hasOwnProperty('people')){
            document.getElementById("Contacts").textContent = Object.keys(data.people).length + " friends";
        }
        else
        {
            document.getElementById("Contacts").textContent = "0 friends";
        }
    
    //*extensions*//
    if(data.hasOwnProperty('extensions')){
        console.log("extensions found"); //console log for if user has extensions
    
    //*socail media*//
    if(data.extensions.hasOwnProperty('socialMedia')){
    
        //*neos*//
        if(data.extensions.socialMedia.hasOwnProperty('neos')){
        document.getElementById("Neos").hidden = false;
        
        //neos username
        if(data.extensions.socialMedia.neos.hasOwnProperty('username')){
            document.getElementById("neosName").textContent = "Username: " + data.extensions.socialMedia.neos.username;
        }
        else
        {
            document.getElementById("neosName").textContent = "";
        }
    
        //neos user-id
        if(data.extensions.socialMedia.neos.hasOwnProperty('userID')){
            document.getElementById("neosUserID").textContent =  "UserID: " + data.extensions.socialMedia.neos.userID;
        }
        else
        {
            document.getElementById("neosUserID").textContent = "";
        }
    }

        /*Twitter*/
        if(data.extensions.socialMedia.hasOwnProperty('twitter')){
            
            if(data.extensions.socialMedia.twitter.hasOwnProperty('link')){
                document.getElementById("twitterLink").textContent = "Twitter: " + data.extensions.socialMedia.twitter.link;
                document.getElementById("twitterLink").href = data.extensions.socialMedia.twitter.link;
                document.getElementById("twitterLink").hidden = false;
                document.getElementById("CommonSocailMedias").hidden = false;
            }

            if(data.extensions.socialMedia.twitter.hasOwnProperty('name')){
                document.getElementById("twitterLink").textContent = "Twitter: " +data.extensions.socialMedia.twitter.name;
            }
        }

        if(data.extensions.socialMedia.hasOwnProperty('github')){

            if(data.extensions.socialMedia.twitter.hasOwnProperty('link')){
                document.getElementById("githubLink").textContent = "Github: " + data.extensions.socialMedia.github.link;
                document.getElementById("githubLink").href = data.extensions.socialMedia.github.link;
                document.getElementById("githubLink").hidden = false;
                document.getElementById("CommonSocailMedias").hidden = false;
            }

            if(data.extensions.socialMedia.twitter.hasOwnProperty('name')){
                document.getElementById("githubLink").textContent = "Github: " +data.extensions.socialMedia.github.name;
            }
        }

    }
    
    if(data.extensions.hasOwnProperty('profileNiceties')){

        if(data.extensions.profileNiceties.hasOwnProperty('bio')){
            document.getElementById("userBio").textContent = '"' + data.extensions.profileNiceties.bio + '"'
            document.getElementById("userBio").hidden = false;
        }

    }
    

    }
    
    });
    }
    //rep-tiled.tk//
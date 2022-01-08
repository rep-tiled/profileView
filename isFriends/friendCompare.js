function getData(personA, PersonB, PersonANorm, PersonBNorm){
    var AIsFriend = false;
    var BIsFriend = false;
    console.log("search for: " + PersonANorm + " and " + PersonBNorm);
    //person A//
    $.getJSON(personA, function(data) {
        console.log(data.people)
        if(data.people.includes(PersonBNorm)){
            BIsFriend = true;
            console.log(BIsFriend)

            //person B//
    $.getJSON(PersonB, function(data) {
        console.log(data.people)
        if(data.people.includes(PersonANorm)){
            AIsFriend = true;
            console.log(AIsFriend)

            if(AIsFriend && BIsFriend){
                document.getElementById("isFriendBool").textContent = "friends"
            } else{
                document.getElementById("isFriendBool").textContent = "not friends"
            }
        }
    });  
        } else {
            document.getElementById("isFriendBool").textContent = "not friends"
        }
    });
    
    


    

    // /psychpsyo.tk
 
}
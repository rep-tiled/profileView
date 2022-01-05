function getData(personA, PersonB, PersonANorm, PersonBNorm){
    var AIsFriend = false;
    var BISFriend = false;
    console.log("search for: " + PersonANorm + " and " + PersonBNorm);
    //person A//
    $.getJSON(personA, function(data) {
        if(data.people.includes(PersonBNorm)){
            BISFriend = true;
            console.log(BISFriend);
        }
    });
    
    //person B//
    $.getJSON(PersonB, function(data) {
        if(data.people.includes(PersonANorm)){
            AIsFriend = true;
            console.log(AIsFriend);
        }
    });

    return (AIsFriend && BISFriend == true);
    
        
        
    

}
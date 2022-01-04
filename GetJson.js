function getData(searchName){
$.getJSON(searchName, function(data) {
    // JSON result in data
    
    //set name field
    document.getElementById("site").textContent = "url: " + data.site;

    //set url field
    if(data.name != null){
        document.getElementById("name").textContent = "Name: " + data.name;
    }else{
        document.getElementById("name").textContent = "Name: " + data.site;
    }
});
}
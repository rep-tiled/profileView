function getData(searchName){
$.getJSON(searchName, function(data) {
    // JSON result in data
    
    //set name field
    document.getElementById("name").textContent = "Name: " + data.name;
});
}
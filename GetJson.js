function getData(searchName){
$.getJSON(searchName, function(data) {
    // JSON result in `data` variable
    document.getElementById("name").textContent = data.name;
});
}
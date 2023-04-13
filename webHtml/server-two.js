function doDisplay(page){
    var x = document.getElementsByClassName("content");
    for(var i = 0; i < x.length;i++){
        x[i].style.display = "none";
        x[page-1].style.display = "block";
    }
}
    
    
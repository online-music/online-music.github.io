var password = document.getElementById("pass");
var output = document.getElementById("output");
 console.log("work")

document.getElementById("sub").addEventListener("click", pog);
function pog(){    
    alert("hi");
    if(document.getElementById("pass").value == ("buh")){
    alert("succes")
        showFiles();
    }
    else{
        alert("Password incorrect");
    }
}
function showFiles(){
    document.getElementById("hideme").style.display = "";
    
}
var password = document.getElementById("password");
var output = document.getElementById("output");
 console.log("work")

document.getElementById("submit").addEventListener("click", pog);
function pog(){    
    alert("hi");
        if(document.getElementById("pass").value == ("buh")){
        document.getElementById("output").innerHTML = "Success!";
            showFiles();
        }
        else{
            alert("Password incorrect");
        }
    }
function showFiles(){
    document.getElementById("hideme").style.display = "";
    
}
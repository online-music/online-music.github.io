var password = document.getElementById("password");
var output = document.getElementById("output");
 

password.oninput = function(event) {
    console.log(password.value)
  if(password.value.equals("buh")){
      output.innerHTML = "pog";
  }
}

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
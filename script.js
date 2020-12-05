var password = document.getElementById("password");
var output = document.getElementById("output");

password.oninput = function(event) {
  if(password.value.equals("buh")){
      output.innerHTML = "pog";
  }
}
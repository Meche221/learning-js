let username;

document.getElementById("submit-button").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("mytext").value = '';
  document.querySelector("h3").innerHTML = `Hello! and welcome ${username} in our webpage`;
}
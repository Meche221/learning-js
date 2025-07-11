let username;

document.getElementById("submit-button").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("mytext").value = '';
  document.querySelector("h3").textContent = `Hello! and welcome ${username} in our webpage`;
}


let age;

document.getElementById("enter-button").onclick= function(){
    age = document.getElementById("myage").value;
    age = 1 + (Number(document.getElementById("myage").value));
    document.getElementById("myage").value = "";
    console.log(age);
    document.querySelector("#age-result").innerHTML = `You age is ${age}`;
  }
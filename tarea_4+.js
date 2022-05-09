var button_meet = document.getElementById("getMeet");
button_meet.onclick = function (){
    var value = document.getElementById("meetString").value;
    //replace(<key>,<new value>) -> replace the key with the new value
    var result = value.replace(/-/, '');  
    document.getElementById("resultMeet").textContent = result;
    console.log(value);
}
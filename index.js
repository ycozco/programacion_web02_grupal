var button_missing_days = document.getElementById("missingDays");
button_missing_days.onclick = function (){
    var arequipa_day = new Date(2022,08,15);
    var today = new Date();
    var dif1 = arequipa_day-today;

    console.log(arequipa_day);
    console.log(today);
    console.log(dif1);
};
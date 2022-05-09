var button_missing_days = document.getElementById("missingDays");
button_missing_days.onclick = function (){
    var arequipa_day = new Date(2022,08,15);
    var today = new Date();
    var dif1 = arequipa_day-today;
    var result = parseInt(dif1/ (1000 * 3600 * 24));
    var result_paragraf = document.getElementById("result_arequipa_day");
    result_paragraf.textContent = "Faltan "+result + " dias.";
};
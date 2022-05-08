
var button_get_day = document.getElementById("getDay");
button_get_day.onclick = function (){
    var value = document.getElementById("day").value;	
    var days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];	// Arreglo con los días de la semana
    var today = new Date();
    var result = document.getElementById("result_day");
    result.textContent =days[value];
    result.style.color = 'red';
};
var button_get_reverse_string = document.getElementById("reverseString");
button_get_reverse_string.onclick = function (){
        var value = document.getElementById("string").value;
        var result = reverseString(value);
        var result_paragraf = document.getElementById("result_string");
        result_paragraf.textContent =result;
};
function reverseString(data){
    var result = "";
    var i = data.length;
    while (i>0) {
        result += data.substring(i-1,i);
        i--;
    }
    return result;
}
var button_missing_days = document.getElementById("missingDays");
button_missing_days.onclick = function (){
    var arequipa_day = new Date(2022,08,15);
    var today = new Date();
    var dif1 = arequipa_day-today;
    var result = parseInt(dif1/ (1000 * 3600 * 24));
    var result_paragraf = document.getElementById("result_arequipa_day");
    result_paragraf.textContent = "Faltan "+result + " dias.";
};

var button_meetString = document.getElementById("button_meetString");
button_meetString.onclick = function (){
    var string1 = document.getElementById("string1").value;
};
var button_get_day = document.getElementById("getDay");
button_get_day.onclick = function (){
    var value = document.getElementById("day").value;	
    var days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    var today = new Date();
    var result = document.getElementById("result_day");
    result.textContent =days[value];
    result.style.color = 'red';
};
var button_meet = document.getElementById("getMeet");
button_meet.onclick = function (){
    var value = document.getElementById("meetString").value;
    //replace(<key>,<new value>) -> replace the key with the new value
    var result = value.replace(/-/, '');  
    document.getElementById("resultMeet").textContent = result;
    console.log(value);
}
function addTable() {
    // get table div
    var myTableDiv = document.getElementById("table_gen");
    var column = document.getElementById("column").value;
    var row = document.getElementById("row").value;
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<column; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<row; j++){
           var td = document.createElement('TD');
           td.width=row*50;
           td.appendChild(document.createTextNode(""));
           td.contentEditable =true;
           tr.appendChild(td);
       }
    }
    myTableDiv.append(table);
}
function table_sum(){
    var column = document.getElementById("column").value;
    var row = document.getElementById("row").value;
    var sum = 0;
    for (var i=0; i<column; i++){
         var tr = document.getElementsByTagName('TR')[i];
            for (var j=0; j<row; j++){
                var td = tr.getElementsByTagName('TD')[j];
                sum += parseInt(td.innerHTML);
            }
        }
    document.getElementById("result_table").textContent = "La suma de la tabla es"+sum;
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

//Ejecicio 2
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

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
 
//Ejercicio 2
function reverseString(data){
    var result = "";
    var i = data.length;
    while (i>0) {
        result += data.substring(i-1,i);
        i--;
    }
    return result;
}

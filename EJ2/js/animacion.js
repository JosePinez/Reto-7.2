function $(selector) {
    return document.querySelector(selector);
}
var count = 0;
var table=document.getElementById("tabla");//stores the table in a variable
//function that adds an image by pressing the add button
function addImg() {
    var timePhoto = new Date().getTime();//stores a time instance in a variable
    var row = document.createElement("tr");
    if(count%7 == 0){
        $("table").appendChild(row);
        var col = document.createElement("td");
        col.innerHTML = "<img src='http://lorempixel.com/150/100/?'"+timePhoto+">";
        document.getElementById("tabla").lastChild.appendChild(col);
        count++;
        console.log(count);
    }else{
        var col = document.createElement("td");
        col.innerHTML = "<img src='http://lorempixel.com/150/100/?'"+timePhoto+">";
        document.getElementById("tabla").lastChild.appendChild(col);
        count++;
        console.log(count);
    }
    if(count == 7){
        count = 0;
    }
}
//removes image by pressing delete button
function removeImg(){
    var rows = document.getElementsByTagName("tr");//stores in an array all the elements tr
    var cols = document.getElementsByTagName("td");//stores in an array all the elements td
    var lastRow = rows[rows.length-1];//store the last tr of the table
    if(cols.length > 0){
        if(count%7-1 == 0 && count != 0){
            table.removeChild(table.lastChild);
            count--;
            console.log(count);
        }else{
            lastRow.removeChild(cols[cols.length-1]);
            count--;
            console.log(count);
        }
        if(count == 0){
            count = 7;
        }
    }else{
        count = 0;
    }

}

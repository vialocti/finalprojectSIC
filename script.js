function calcular(){
    var principal = document.getElementById("principal").value;
    if (principal>0) {
    var rate=document.getElementById("rate").value;
    var years =  document.getElementById("years").value; 
    var year=new Date().getFullYear() + parseInt(years);
    var interest = principal * years * rate /100;
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark>\<br\>You will receive an amount of <mark>" + interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    }
    else{
        alert("the entered value must be positive");
        document.getElementById("principal").focus();
    }
    
}

function loadpage(){
    document.getElementById("rate").value="10.25";
}

function updateRange(){

    var ratevalue=document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=ratevalue;

}
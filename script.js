function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest=principal * rate * years / 100;
    var year = new Date().getFullYear() + years;

    document.getElementById("result").innerHTML="Si deposito dolares recibio <mark>" + interest +"</mark> <br/> year";
    
}
        
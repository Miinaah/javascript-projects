function addition()
{
    let num1=Number(document.getElementById("number1").value)
    let num2=Number(document.getElementById("number2").value) 
    add_result=num1+num2;
    document.getElementById("result").innerHTML = add_result;
}
function subtraction()
{
    let num1=Number(document.getElementById("number1").value)
    let num2=Number(document.getElementById("number2").value) 
    sub_result=num1-num2;
    document.getElementById("result").innerHTML = sub_result;
}
function division()
{
    let num1=Number(document.getElementById("number1").value)
    let num2=Number(document.getElementById("number2").value) 
    div_result=num1/num2;
    document.getElementById("result").innerHTML = div_result;
}
function multiplication()
{
    let num1=Number(document.getElementById("number1").value)
    let num2=Number(document.getElementById("number2").value) 
    mul_result=num1*num2;
    document.getElementById("result").innerHTML = mul_result;
}
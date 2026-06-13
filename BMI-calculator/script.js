function checkBMI()
{
    let h=Number(document.getElementById("height").value)
    let w=Number(document.getElementById("weight").value)
    let bmi=w/(h*h);
    if(bmi<18.5)
    {
        document.getElementById("result").innerHTML =
"Your BMI is " + bmi.toFixed(2) + "<br>Under Weight";
    }else if (bmi < 25)
    {
        document.getElementById("result").innerHTML =
"Your BMI is " + bmi.toFixed(2) + "<br>Normal Weight";
    }else if (bmi < 30)
    {
        document.getElementById("result").innerHTML =
"Your BMI is " + bmi.toFixed(2) + "<br>Over Weight";
    }else
    {
        document.getElementById("result").innerHTML =
"Your BMI is " + bmi.toFixed(2) + "<br>Obese";
    }
}
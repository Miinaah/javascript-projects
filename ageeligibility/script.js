function checkage()
{
    let age=document.getElementById("age").value 
    if(age>=18)
    {
        document.getElementById("result").innerHTML="Eligible to Vote"
    }else{
        document.getElementById("result").innerHTML="Not Eligible to Vote"
    }
}
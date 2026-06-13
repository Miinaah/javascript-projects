function checkgrade()
{
    let mark=document.getElementById("mark").value 
    if(mark>=90)
    {
        document.getElementById("result").innerHTML="GRADE:A+"
    }else if(mark>=80 && mark<90)
    {
        document.getElementById("result").innerHTML="GRADE:A"
    }else if(mark>=70 && mark<80)
    {
        document.getElementById("result").innerHTML="GRADE:B+"
    }else if(mark>=60 && mark<70)
    {
        document.getElementById("result").innerHTML="GRADE:B"
    }else if(mark<60)
    {
        document.getElementById("result").innerHTML="FAIL"
    }else
    {
        document.getElementById("result").innerHTML="INVALID"
    }
}
function checkCGPA(){
    let cgpa=document.getElementById("cgpa").value;
    if(cgpa>=9)
    {
        document.getElementById("result").innerHTML = "Outstanding!!";
    }else if(cgpa>=8){
        document.getElementById("result").innerHTML = "Excellent!!";
    }else{
        document.getElementById("result").innerHTML = "Need Improvement!!";
    }
}
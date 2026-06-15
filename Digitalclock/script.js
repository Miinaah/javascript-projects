function showTime()
{
    let now = new Date();
    let hr=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    document.getElementById("clock").innerHTML =hr + ":" + min + ":" + sec;
}
setInterval(showTime, 1000);
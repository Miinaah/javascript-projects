function randomquote()
{
let quotes = [
"Success comes from practice.",
"Never stop learning.",
"Dream big and work hard.",
"Consistency beats talent."
];
let num = Math.floor(Math.random() * 4);
let q=quotes[num];
document.getElementById("result").innerHTML=q
}
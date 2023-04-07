function set_color1(){
    document.body.style.backgroundColor="black";
    document.body.style.color="green";

}

function set_color2(){
    document.body.style.backgroundColor="wheat";
    document.body.style.color="black";

}

let changeBtn=document.getElementById("change");
submitBtn.addEventListener("click",set_color3);

function set_color3(){
    var colorName= document.getElementById("color").value;
    document.body.style.backgroundColor=colorName;
    document.body.style.color="black";
    alert("press ok to change")

}
let optFirst=document.getElementById("color1");
optFirst.addEventListener("click",set_color1);

let optSecond=document.getElementById("color2");
optSecond.addEventListener("click",set_color2);

let optThird=document.getElementById("color3");
optThird.addEventListener("click",set_color3);
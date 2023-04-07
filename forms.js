function show_alert(){
    var lName=document.getElementById("Last").value;
    alert("Thanks "+Name.value+" "+lName+" for the feedback");
}

var Name= document.getElementById("first");
let submitBtn=document.getElementById("submit");

Name.addEventListener("keyup",()=>{
    submitBtn.disable=true;

    if (Name.value.length>4){
        submitBtn.disabled=false; 
        submitBtn.addEventListener("click",show_alert);
    }else{
        submitBtn.disabled=true;

    }
});



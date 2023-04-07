let submitBtn=document.getElementById("submit");
submitBtn.addEventListener("click",changeProg);

function changeProg(){
    let input=document.getElementById("progressInput");
    let currProg=document.getElementById("progress");
    currProg.textContent=input.value;
    alert("Progress Updating...");
}
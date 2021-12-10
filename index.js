function openNav1() {
  if(document.getElementById("Nav").style.width !="350px")
    {document.getElementById("Nav").style.width = "350px";
    document.getElementById("Nav").style.height = "250px";
    var element = document.getElementById("Option1");
    element.classList.add("Active");}
    else{
        Close();
    }
}
Dark=false;

function DarkMode(){
if(Dark){
    Dark=false;
    document.body.classList.add("dark-mode");
    document.getElementById("sidebar").classList.add("dark-mode");
}
else{
    Dark=true;
    document.body.classList.remove("dark-mode");
    document.getElementById("sidebar").classList.remove("dark-mode");
}

}

function openNav2() {
    if(document.getElementById("Nav").style.width !="350px")
    {
    document.getElementById("Nav").style.width = "350px";
    document.getElementById("Nav").style.height = "250px";
    var element = document.getElementById("Option2");
    element.classList.add("Active");document.getElementById("Nav").classList.add("DownNav");
    }
    else{
        Close();
    }
}
function Close(){
    closeNav1();
    closeNav2();
}
function closeNav1() {
    document.getElementById("Nav").style.width = "0px";
    document.getElementById("Nav").style.height = "100px";
    var element = document.getElementById("Option1");
    element.classList.remove("Active"); 

}function closeNav2() {
    document.getElementById("Nav").style.width = "0px";
    document.getElementById("Nav").style.height = "100px";
    var element = document.getElementById("Option2");
    element.classList.remove("Active"); 
    document.getElementById("Nav").classList.remove("DownNav");
}
function goHome(){
    Close();
}

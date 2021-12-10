function openNav1() {
  if(document.getElementById("myNav").style.width !="350px")
    {document.getElementById("myNav").style.width = "350px";
    document.getElementById("myNav").style.height = "250px";
    var element = document.getElementById("Option1");
    element.classList.add("MojeFunkce");}
    else{
        Close();
    }
       
}
function DarkMode(){
    document.body.classList.toggle("dark-mode");
    document.getElementById("sidebar").classList.toggle("dark-mode");
}

function openNav2() {
    if(document.getElementById("myNav").style.width !="350px")
    {
    document.getElementById("myNav").style.width = "350px";
    document.getElementById("myNav").style.height = "250px";
    var element = document.getElementById("Option2");
    element.classList.add("MojeFunkce");document.getElementById("myNav").classList.add("DownNav");
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
    document.getElementById("myNav").style.width = "0px";
    document.getElementById("myNav").style.height = "100px";
    var element = document.getElementById("Option1");
    element.classList.remove("MojeFunkce"); 

}function closeNav2() {
    document.getElementById("myNav").style.width = "0px";
    document.getElementById("myNav").style.height = "100px";
    var element = document.getElementById("Option2");
    element.classList.remove("MojeFunkce"); 
    document.getElementById("myNav").classList.remove("DownNav");
}
function goHome(){
    Close();
}

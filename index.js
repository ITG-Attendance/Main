function openNav1() {
    Close();
    setTimeout(() => {  document.getElementById("myNav").style.width = "350px";
    document.getElementById("myNav").style.height = "250px";
    var element = document.getElementById("Option1");
    element.classList.add("MojeFunkce");  }, 250);
       
}
function openNav2() {
    Close();
    setTimeout(() => {document.getElementById("myNav").style.width = "350px";
    document.getElementById("myNav").style.height = "250px";
    var element = document.getElementById("Option2");
    element.classList.add("MojeFunkce");document.getElementById("myNav").classList.add("DownNav");}, 250);
}
function Close(){
    closeNav1();
    closeNav2();
}
/* Close when someone clicks on the "x" symbol inside the overlay */
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

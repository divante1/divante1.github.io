var $ = function(id){
    return document.getElementById(id);
};
var largerPicture = function(){

}
var home = function(){
    window.location.href= "index.html";
};

var education = function(){
    window.location.href= "education.html";
};
var experience = function(){
    window.location.href= "experience.html";
};
var contact = function(){
    window.location.href= "contact.html";
};


window.onload = function(){
    $("home").onclick = home;
    
    $("education").onclick = education;
    $("experience").onclick = experience;
    $("contact").onclick = contact;
    $("projectNumber").onmouseover = largerPicture;
};

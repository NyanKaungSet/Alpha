/*var upDownSwitch = document.querySelector('#up-down-switch');
upDownSwitch.style="font-size:30px;transform: rotate(180deg);";
var lgDiv = document.querySelector('#logoDiv');
var isPageUp = true;
upDownSwitch.onclick = () => {
    if(isPageUp){
        lgDiv.style="display:none;";
        upDownSwitch.style="font-size:30px;transform: rotate(0deg);";
        isPageUp = false;
    }else{
        lgDiv.style="display:flex;";
        upDownSwitch.style="font-size:30px;transform: rotate(180deg);";
        isPageUp = true;
    }
}*/


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
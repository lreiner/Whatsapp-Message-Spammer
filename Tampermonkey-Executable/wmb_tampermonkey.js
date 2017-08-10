// ==UserScript==
// @name         Whatsapp Message botton
// @namespace    https://github.com/re-invent/Whatsapp-Message-Bot
// @version      1.0
// @description  Made by lukay97
// @author       lukay97
// @match        https://web.whatsapp.com/
// @grant        none
// @icon         https://k60.kn3.net/58A8A056B.png
// @icon64       https://k60.kn3.net/58A8A056B.png
// ==/UserScript==

var timer = setInterval(general,1000);

function general(){
  if(document.getElementsByClassName("app-wrapper-main")[0] != null){
    var item2 = document.getElementsByClassName("pane-header pane-list-header")[0];
    var panel = document.getElementsByClassName("chatlist-panel pane pane-one")[0];
    var element = item2.cloneNode(true);
    element.style.zIndex = 0;
    element.innerHTML = "<input type='text' id='mensaje' placeholder='Message' style='margin-right:10px' size='30'><input type='number' min='1' id='repeticiones' style='width:50px;padding-left:5px;margin-right:5px'>Times<div id='spam' data-icon=\"send\" class=\"img icon icon-send\" style='margin-left: 5px;cursor:pointer;'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path opacity=\".4\" d=\"M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z\"></path></svg></div>";
    panel.insertBefore(element, panel.childNodes[1]);
    document.getElementById("spam").addEventListener("click", spam);
    clearInterval(timer);
  }else{
    console.log("WS Spam: Waiting for whatsapp to load...");
  }
}

function dispatch(input, message) {
  InputEvent = Event || InputEvent;
  var evt = new InputEvent('input', {
      bubbles: true
  });
  input.innerHTML = message;
  input.dispatchEvent(evt);
  document.querySelector(".compose-btn-send > .icon-send").click();
}

function spam(){
  var text = document.getElementById("mensaje").value;
  var reps = document.getElementById("repeticiones").value;
  var input = document.getElementsByClassName("input")[0];
  var counter = 1;
  while(counter <= reps){
    dispatch(input, text); 									
    counter++;
  }
}

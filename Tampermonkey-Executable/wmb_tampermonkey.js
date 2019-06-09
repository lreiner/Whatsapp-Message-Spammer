// ==UserScript==
// @name         Whatsapp Message Bot
// @namespace    https://github.com/lreiner/Whatsapp-Message-Spammer/
// @version      4.0
// @description  Made by lreiner
// @author       lreiner
// @match        https://web.whatsapp.com/
// @grant        none
// @icon         https://k60.kn3.net/58A8A056B.png
// @icon64       https://k60.kn3.net/58A8A056B.png
// ==/UserScript==

var allElementsClassName = "_2HS9r"; //class name of Search Div
var buttonSendClass = "._3M-N-"; //class name WITH "." from send button
var inputMessageClassName = "_3u328"; //div class name where text is stored

var timer = setInterval(general, 1000);

function general() {
    if (document.getElementsByClassName(allElementsClassName)[0] != null) {
        console.log("WS Spam: Found Div to inject ...");
        var item = document.getElementsByClassName(allElementsClassName)[0];
        var element = item.cloneNode(true);
        element.innerHTML = '<div style="height: 110px; width: 100%;"> \
                                <input type="text" id="inputMessage" placeholder="Message ..." style="margin-left: 10px; margin-top: 10px; width: calc(100% - 50px); height: 30px; padding-left: 10px"> \
                                <hr style="border-color: white; color: #dbdbdb; background-color: #dbdbdb; border: none; height: 1px;"> \
                                <div style="padding-left: 10px;"> \
                                    <div data-icon="send" class="imgiconicon-send" style="cursor:pointer; height: 36px; display: inline-block; width: 100%;"> \
                                        <input type="number" min="1" id="timesSend" placeholder="Times ..." style="width:50px;padding-left: 10px;max-width: 40%;width: 80%;height: 30px;margin-right: 10px;float:left;"> \
                                        <button type="button" id="spam" style="background-color: transparent; color: transparent;"> \
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style="display: inline"> \
                                                <path opacity=".4" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path> \
                                            </svg> \
                                        </button> \
                                        <button type="button" id="donate" style="display: inline; float:right; margin-right: 30px;"> \
                                            <img src="http://i.imgur.com/Cs3BBYI.png" style="max-width: 100px; max-height: 36px; min-height: 36px;"> \
                                        </button> \
                                    </div>  \
                                </div> \
                            </div>';
        item.appendChild(element);
        console.log("WS Spam: Injected successfully ...");
        document.getElementById("spam").addEventListener("click", spam);
        document.getElementById("donate").addEventListener("click", donate);
        clearInterval(timer);
    } else {
        console.log("WS Spam: Waiting for whatsapp to load...");
    }
}

function dispatch(input, message) {
    //InputEvent = Event || InputEvent;
    var evt = new InputEvent('input', {
        bubbles: true
    });
    input.innerHTML = message;
    input.dispatchEvent(evt);
    document.querySelector(buttonSendClass).click();
}

function spam() {
    var text = document.getElementById("inputMessage").value;
    var reps = document.getElementById("timesSend").value;
    var input = document.getElementsByClassName(inputMessageClassName + " copyable-text selectable-text")[0];
    var counter = 1;
    while (counter <= reps) {
        dispatch(input, text);
        counter++;
    }
}

function donate() {
    var url = "https://www.paypal.me/LukasReiner";
    var win = window.open(url, '_blank');
    win.focus();
}

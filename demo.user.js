// ==UserScript==
// @name         评教
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       山有木兮之
// @match        http://jwgl2018.xatu.edu.cn/eams/quality/stdEvaluate.action*
// @match        http://jwgl2018.xatu.edu.cn/eams/quality/stdEvaluate!answer.action*
// @match        http://jwgl2018.xatu.edu.cn/eams/quality/stdEvaluate!innerIndex.action*
// @icon         https://www.google.com/s2/favicons?domain=xatu.edu.cn
// @grant        none
// ==/UserScript==
function sleep(time, unit) {
    if (time == null) { time = 5000; }
    if (unit != null) { time = time * 1000; }
    for (var t = Date.now(); Date.now() - t <= time;);
}
function check() {
    var box = document.getElementsByClassName("qBox objective required");
    console.log(box.length);
    for (var n = 1; n <= box.length; n++) {
        var m = 40 + n;
        var b = document.querySelector("#question_" + m + " li:last-child input");
        //var b=box[9];
        b.setAttribute("checked", "checked");

    }
    document.querySelector("textarea").value = "非常好";
    setTimeout(() => document.querySelector("#sub").click(), 500);
}
function a() {
    console.log('confirm')
    return true;
}
window.confirm = a;

if (location.href.indexOf("innerIndex.action") != -1 || location.href.indexOf("stdEvaluate.action") != -1) {
    console.log(location.href);
    sleep(1000);
    document.getElementsByClassName("eval")[0].click();
}

else if (location.href.indexOf("answer.action") != -1) {
    window.onload = function () {
        sleep(400);
        setTimeout(() => check(), 1000);
    }
}

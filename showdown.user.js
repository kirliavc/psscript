// ==UserScript==
// @name         Showdown Translation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pokemon showdown 国服汉化
// @author       ceca3
// @match        http://china.psim.us/*
// @match        http://47.94.147.145.psim.us/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @run-at       document-end
// ==/UserScript==
var translations={
    "[Gen 7] Random Battle":"[第七世代] 随机对战",
    "Add game":"寻找新对战",
    "Format:":"分级",
    "Team:":"队伍",
    "Battle!":"战斗！",
    "Find a random opponent":"寻找一位随机对手",
    "Teambuilder":"队伍编辑器",
    "Ladder":"排行榜",
    "Watch a battle":"观看对战",
    "Find a user":"查找用户",
    "Choice Scarf":"专爱围巾",
    "Choice Band":"专爱头巾",
    "Did you have a good day?":"你今天过的还好吗?",
    "Lucario":"路卡利欧",
    "Lucarionite":"M路卡利欧石",
    "Adaptability":"适应力",
    "[Gen 7] OU battle started between":"[第七世代] OU比赛开始：",
    "and":" 和",
    "used":" 使用了",
    "The opposing":"对手的",
    "restored a little HP using its Leftovers!":"通过剩饭恢复了一点HP！"
};
var QQ=$.noConflict();
function translate(originalStr){
    var tmp=originalStr.trim();
    console.log(tmp);
    if(translations[tmp])
        return translations[tmp];
    else 
        return originalStr;
        
}
function translateElement(element){
    var elTW = document.createTreeWalker(element, NodeFilter.SHOW_Element, null, false);
    var node=null;
    while((node=elTW.nextNode())!=null){
        if(node.nodeValue){
            node.nodeValue=translate(node.nodeValue);
            //node=elTW.previousNode();
            //QQ(t).remove();
        }
    }
}
(function() {
    'use strict';
    translateElement(document.getElementById('room-'));
    QQ(document).on('DOMNodeInserted',function(e){
        translateElement(e.target);
    });
    // Your code here...
})();

import * as data from "./data.js";

const CHOCO_DATA = data.CHOCOLATE_DATA;

var urlParams = new URLSearchParams(window.location.search);

var num = urlParams.get("num");


window.onload = function (){
    document.getElementById("main-picture").src = CHOCO_DATA["choco_"+num].img;
    document.getElementById("add-picture-1").src = CHOCO_DATA["choco_"+num].pic_1;
    document.getElementById("add-picture-2").src = CHOCO_DATA["choco_"+num].pic_2;
}
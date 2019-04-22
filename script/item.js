import * as data from "./data.js";

const CHOCO_DATA = data.CHOCOLATE_DATA;

var urlParams = new URLSearchParams(window.location.search);

var num = urlParams.get("num");

function purchase_item(){
    send_email('niuniu1397@gmail.com');
}

function send_email(user_email){
    var email_url = "mailto:";
    email_url += user_email + "?subject=" + encodeURIComponent("Order Confirmation") +
        "&body=" + encodeURIComponent("Thank you for purchase "+CHOCO_DATA["choco_"+num].name);
    
    window.open(email_url,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
}

window.onload = function (){
    document.getElementById("main-picture").src = CHOCO_DATA["choco_"+num].img;
    document.getElementById("add-picture-1").src = CHOCO_DATA["choco_"+num].pic_1;
    document.getElementById("add-picture-2").src = CHOCO_DATA["choco_"+num].pic_2;
}

document.getElementById('purchase-button').onclick = function(){
    purchase_item();
}
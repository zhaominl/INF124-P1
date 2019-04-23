import * as data from "./data.js";

const CHOCO_DATA = data.CHOCOLATE_DATA;

var urlParams = new URLSearchParams(window.location.search);

var num = urlParams.get("num");

/* function to check if the user-input for email address is in the email template */
function emailValidation(){
    var emailformat = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    if (  email.value.match(emailformat)   ){
            return true;
    }
    
}

function validation() {
    var quantity = document.getElementById("quantity");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    
    var phoneNumber = document.getElementById("phoneNumber");
    var phoneNumberLength = phoneNumber.value.length;

    var streetNumber = document.getElementById("streetNumber");
    var streetNumberLength = streetNumber.value.length;

    var streetName = document.getElementById("streetName");
    var unitNumber = document.getElementById("unitNumber");
    var city = document.getElementById("city");
    
    var state = document.getElementById("state");    
    var creditCard = document.getElementById("creditCard");
    var creditCardLength = creditCard.value.length;


    var email = document.getElementById("email");


    /* var Shipping gets the value of shipping by its getElementById */
    var Shipping = document.getElementById("selection").value;


    /* basic validation if user inputs blank space(s) */
    if( quantity.value.trim() == "") {
            alert("Please provide a number of quantity");
            return false;
    }
    if( firstName.value.trim() == "") {
            alert("Please provide your first name");
            return false;
    }
    if( lastName.value.trim() == "") {
            alert("Please provide your last lname");
            return false;
    }
    if( phoneNumber.value.trim() == "") {
            alert("Please provide your phoneNumber");
            return false;
    }
    if( streetNumber.value.trim() == "") {
            alert("Please provide your streetNumber");
            return false;
    }
    if( streetName.value.trim() == "") {
            alert("Please provide your streetName");
            return false;
    }
    if( city.value.trim() == "") {
            alert("Please provide your city");
            return false;
    }
    if( state.value.trim() == "") {
            alert("Please provide your state");
            return false;
    }
    if( creditCard.value.trim() == "") {
            alert("Please provide your creditCard numbers");
            return false;
    }
    if( email.value.trim() == "") {
            alert("Please provide your email address");
            return false;
    }
    if( Shipping == "default") {
            alert("Please select a shipping method");
            return false;
    }
    /* Basic validation ends */

    /* checks if user inputs Number and the Iteger is != < 1 */
    if(isNaN(quantity.value)){
            alert("Please provide a valid number of quantity")
            return false;
    }
    if(quantity.value < 1){
            alert("Please provide a valid number of quantity")
            return false;
    }

    /* checks if user inputs Number and the Iteger is 10 digits */
    if(isNaN(phoneNumber.value)){
            alert("Please provide a valid phoneNumber")
            return false;
    }
    if(phoneNumberLength != 10){
            alert("Please provide a valid phoneNumber")
            return false;
    }

    /* checks if user inputs Number and the Iteger is 1-5 digits */
    if(isNaN(streetNumber.value)){
            alert("Please provide a valid streetNumber")
            return false;
    }
    if(streetNumberLength < 0 ){
            alert("Please provide a valid streetNumber")
            return false;
    }
    if(streetNumberLength > 5 ){
            alert("Please provide a valid streetNumber")
            return false;
    }

    /* checks if state is written in 2 char */
    if( state.value.length != 2){

            alert("Please provide a valid state name in 2 letters")
            return false;
    }

    /* checks if user inputs Number and the Iteger is 16 digits */
    if(isNaN(creditCardLength)){
            alert("Please provide a valid creditCard number")
            return false;
    }
    if(creditCardLength != 16){
            alert("Please provide a valid creditCard number")
            return false;
    }

    /* wrapper function to check email validation */
    if(  emailValidation() != true  ){
            alert("Please provide a valid email address")
            return false;
    }

    /* checks for the shipping method */
    if( Shipping == "2days") {

            return true;
    }

    if( Shipping == "7days") {

            return true;
    } 
    /* checks for the shipping method ends here */

    return true;
};

function purchase_item(e){
    if (validation()){
        send_email(document.getElementById("email").value);
    }else{
        e.preventDefault();
    }
}

function send_email(user_email){
    var email_url = "mailto:";
    email_url += user_email + "?subject=" + encodeURIComponent("Order Confirmation") +
        "&body=" + encodeURIComponent("Thank you for purchase "+CHOCO_DATA["choco_"+num].name+" at Choco Booth!");
    
    window.open(email_url,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
}

window.onload = function (){
    document.getElementById("main-picture").src = CHOCO_DATA["choco_"+num].img;
    document.getElementById("add-picture-1").src = CHOCO_DATA["choco_"+num].pic_1;
    document.getElementById("add-picture-2").src = CHOCO_DATA["choco_"+num].pic_2;
    document.getElementById("name").innerHTML = CHOCO_DATA["choco_"+num].name;
    document.getElementById("small-name").innerHTML = CHOCO_DATA["choco_"+num].name;
    document.getElementById("price").innerHTML = '$ ' + CHOCO_DATA["choco_"+num].price;
    document.getElementById("origin").innerHTML += CHOCO_DATA["choco_"+num].origin;
    document.getElementById("direction").innerHTML += CHOCO_DATA["choco_"+num].direction;
}

document.getElementById('user-form').onsubmit = function(e){
    purchase_item(e);
}
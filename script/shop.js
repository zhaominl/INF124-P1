import * as data_pack from "./data.js";

const data = data_pack.CHOCOLATE_DATA;

window.onload = function (){
    for (var i = 1; i<=15; ++i){
        document.getElementById("item-list").innerHTML += 
        "<div class = \"item-block\">"+
        "<table>" +
            "<tbody >" + 
                "<tr>" +
                    "<td><img class = \" enlarge-pic \" src=\" " + data["choco_"+i].img + " \" /></td> " +
                "</tr>" +
                "<tr>" +
                    "<td><h2> "+ data["choco_"+i].name +  "</h2> </td> " +
                "</tr>" +
                "<tr>" +
                    "<td><h1> $"+ data["choco_"+i].price +  "</h1> </td>" +
                "</tr>" +
            "</tbody> " +
        "</table>" +
        "</div>";
    }
}
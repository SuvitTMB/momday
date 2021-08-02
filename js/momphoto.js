var cleararray = "";
var SelectCard = 0;
var SelectMsg = "";



$(document).ready(function () {
  //document.getElementById('Page24').style.display='none';
});


function GotoPage() {
  location.href = "showpicture.html";
}


function ShowImages() {
  window.open("createcard.html?SelectCard="+SelectCard+"");
  location.href = "momcard.html";
  //location.href = "createcard.html?SelectCard="+SelectCard;

/*
  location.href = "loadcard.html?SelectCard="+SelectCard+"&SelectMsg="+SelectMsg;
  document.getElementById('Page22').style.display='none';
  document.getElementById('Page23').style.display='none';
  document.getElementById('Page24').style.display='block';
  var str = "";
  str+= '<img src=./img/'+ SelectCard +' style="width:100%;border-radius: 5px;">';
  str+= '<div class="top-left">Line Retail Society<div class="text-date">12 สิงหาคม 2564</div></div>';
  str+= '<div class="Centered">'+ SelectMsg +'</div>';
  str+= '<div class="top-right"><img src="./img/person.png" width="70px" class="img_profile">';
  str+= '<div class="img_profiletext">Website</div></div>';

  $("#DisplayIMG").html(str); 
*/
  //$("#DisplayCard").html(str); 
}



var cleararray = "";
var SelectCard = 0;
var SelectMsg = "";



$(document).ready(function () {
  //document.getElementById('btn-1').style.display='block';
  //document.getElementById('btn-2').style.display='none';
  //document.getElementById('btn-3').style.display='none';
  document.getElementById('Page21').style.display='block';
  document.getElementById('Page22').style.display='none';
  //document.getElementById('Page23').style.display='none';
  //document.getElementById('Page24').style.display='none';
});


function GotoPage1() {
  //document.getElementById('Page22').style.display='block';
  //document.getElementById('Page23').style.display='none';
  //document.getElementById('Page24').style.display='none';
}

function GotoPage2() {
  //document.getElementById('Page22').style.display='none';
  //document.getElementById('Page23').style.display='block';
  //document.getElementById('Page24').style.display='none';
}


function CreateCard() {
  document.getElementById('Page21').style.display='none';
  document.getElementById('Page22').style.display='block';
  //document.getElementById('Page23').style.display='none';
  //document.getElementById('Page24').style.display='none';

 // document.getElementById('btn-1').style.display='none';
  //document.getElementById('btn-2').style.display='block';
  //document.getElementById('btn-3').style.display='block';


}


function SelectCardNumber(n) {
  SelectCard = n;
  ShowImages();

  //if(n==1) { SelectCard = "momLDP.png"; } else 
  //if(n==2) { SelectCard = "Card2.png"; } else 
  //if(n==3) { SelectCard = "Card3.png"; } else 
  //if(n==4) { SelectCard = "Card4.png"; } else 
  //if(n==5) { SelectCard = "Card5.png"; }

  document.getElementById('Page21').style.display='none';
  document.getElementById('Page22').style.display='none';
  //document.getElementById('Page23').style.display='block';
  //document.getElementById('Page24').style.display='none';
}

//https://www.sanook.com/campus/1391377/
function SelectCardText(n) {
  SelectMsg = n;
  //if(n==1) { SelectMsg = "แม่คือพระคือนางฟ้าเทวดา<br>ให้กำเนิดเกิดลูกมาเลี้ยงจนใหญ่<br>ดูแลลูกไม่ให้มีอันตราย<br>สักการะจากหัวใจของลูกเอย"; } else 
  //if(n==2) { SelectMsg = "ประนมมือก้มกราบลงบนตัก<br>ด้วยความรักความเคารพต่อแม่ฉัน<br>ซึ้งพระคุณอันยิ่งใหญ่มากอนันต์<br>ใจเบิกบานแสนอบอุ่นวันแม่เอย"; } else 
  //if(n==3) { SelectMsg = "รักของแม่ตราตรึงใจประทับใจ<br>มอบชีวิตเลี้ยงลูกรักจนเติบใหญ่<br>ขอสัญญาว่าเมื่อลูกนี้โตไป<br>เป็นผู้ใหญ่เป็นคนดีของสังคม"; } else 
  //if(n==4) { SelectMsg = "มีวันนี้เพราะมีแม่คอยพร่ำสอน<br>ยามจะนอนคอยพัดวีให้สุขสันต์<br>คอยถนอมและปกป้องไม่มีหวั่น<br>ก้มกราบกรานด้วยสำนึกในพระคุณ"; } else 
  //if(n==5) { SelectMsg = "แสนดีใจที่เกิดมาเป็นลูกแม่<br>คอยเทคแคร์ดูแลลูกไม่เคยห่าง<br>แม่ประคบประหงมลูกทุกเส้นทาง<br>มีทุกอย่างเป็นเพราะแม่ดูแลเรา"; }
  
  //alert(SelectMsg);
  ShowImages();
}


function ClickNewMsg() {
  SelectMsg = document.getElementById("SendMsg").value;
  //alert(SelectMsg);
  ShowImages();

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



var cleararray = "";
var i = 1;
var str = "";

var firebaseConfig = {
  apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
  authDomain: "retailproject-6f4fc.firebaseapp.com",
  projectId: "retailproject-6f4fc",
  storageBucket: "retailproject-6f4fc.appspot.com",
  messagingSenderId: "653667385625",
  appId: "1:653667385625:web:a5aed08500de80839f0588",
  measurementId: "G-9SKTRHHSW9"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore().collection("Momday");


$(document).ready(function () {
  LoadImg();
});





function LoadImg() {
  db.orderBy("PostTimeStamp", "desc").get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      GetAllData(doc)
    });
    //ShowData();
  });  
}


function GetAllData(doc) {
  i = i+1;

  str+='<div class="BoxView" onclick="ShowPictureID(\'' + doc.data().PostPicture + '\',\'' + doc.data().PostMemo + '\')">';
  //str+='<div class="BoxView" onclick="ShowPictureID(\'' + doc.data().PostPicture + '\,\'' + doc.data().PostMemo + '\')">';
  //str+='<div class="BoxView" onclick="ShowPictureID(\'' + doc.data().PostPicture + '\'\'' + doc.data().PostMemo + '\')">';
  str+='<div><img src="'+doc.data().PostPicture+'" style="width: 100%;height:96px;border-radius:5px;"></div>';

  //str+='<div class="Centered-mom">'+ doc.data().PostMemo +'<br>';
  //str+='<div id="btn" class="btn-t2" onclick="ShowPictureID(\'' + doc.id + '\')" style="font-size:11px;">ดูรายละเอียด</div>';
  //str+='</div>';
  str+='<div style="width: 100%;padding-top:5px;"><img src="'+ doc.data().LinePicture +'" style="width:35px;height:35px;"> <span>'+ doc.data().LineName +'</span></div>';
  str+='</div>';
  $("#DisplayData").html(str);
}


function GotoPage() {
  location.href = "showpicture.html";
}


function ShowPictureID(n,y) {
  var str = "";
  str += '<div>';
  str += '<div><img src="'+ n +'" style="max-width:290px;"></div>';
  str += '<div style="padding:8px; font-weight: 600; color:#0056ff;">"'+ y +'"</div>';
  str += '</div>';
  //alert(n);
  $("#DisplayPhoto").html(str);
  document.getElementById("id01").style.display = "block";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}








/*




function ShowImages() {
  window.open("createcard.html?SelectCard="+SelectCard+"");
  location.href = "momcard.html";
  //location.href = "createcard.html?SelectCard="+SelectCard;
}

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




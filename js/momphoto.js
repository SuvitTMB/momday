var cleararray = "";
var i = 0;
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
  str+='<div class="list-element" id="'+i+'">';
  str+='<div class="BoxView" onclick="ShowPictureID(\'' + doc.data().PostPicture + '\',\'' + doc.data().PostMemo + '\')">';
  str+='<div><img src="'+doc.data().PostPicture+'" style="width: 100%;height:96px;border-radius:5px;"></div>';
  str+='<div style="width: 100%;padding-top:5px;"><img src="'+ doc.data().LinePicture +'" style="width:35px;height:35px;"> <span>'+ doc.data().LineName +'</span></div>';
  str+='</div>';
  str+='</div>';
  $("#DisplayData").html(str);
}


function GotoPage() {
  location.href = "showpicture.html";
}


var str1 = "";
function ShowPictureID(n,y) {
  //ii = i+1;
  str1 += '<div>';
  str1 += '<div><img src="'+ n +'" style="max-width:290px;"></div>';
  str1 += '<div style="padding:8px; font-weight: 600; color:#0056ff;">"'+ y +'"</div>';
  str1 += '</div>';
  $("#DisplayPhoto").html(str1);
  str1 = "";
  document.getElementById("id01").style.display = "block";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}



const loadmore = document.querySelector('#loadmore');
let currentItems = 8;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.list .list-element')];
    for (let i = currentItems; i < currentItems + 8; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItems += 8;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        event.target.style.display = 'none';
    }
})
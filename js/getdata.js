//var vLineID = "";
var vLineName = "";
//var vLinePicture = "";
///var vstatusconfirm = 0;
//document.getElementById('gotopage').style.display='none';


/*
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
var db = firebase.firestore().collection("CheckProfile");
*/

async function main() {
	await liff.init({ liffId: "1655966947-rope1zn6" });
	document.getElementById("isLoggedIn").append(liff.isLoggedIn());
	if(liff.isLoggedIn()) {
		getUserProfile();
	} else {
		liff.login();
	}
}
main();


function openWindow() {
	liff.openWindow({
		url: "https://line.me",
		external: true     
	})
}


async function getUserProfile() {
	const profile = await liff.getProfile();
	//vLineID = profile.userId;
	vLineName = profile.displayName;
	//vLinePicture = profile.pictureUrl;
	sessionStorage.setItem("LineID", profile.userId);
	sessionStorage.setItem("LineName", profile.displayName);
	sessionStorage.setItem("LinePicture", profile.pictureUrl);
	$("#DisplayLineName").html(vLineName);
	//alert(profile.userId+"---1");
	//FindID(profile.userId);
	//CheckLineID(profile.userId);
    //sessionStorage.setItem("LineID", profile.userId);
}

/*


//var CheckUserID = "0";

function FindID(gLineID) {


    db.where('lineID','==',gLineID).get().then((snapshot)=> {
      	snapshot.forEach(doc=> {
	        //var aStatusConfirm = doc.data().statusconfirm;
	        //var aStatusPass = doc.data().statuspass;
	        //var aStatusEdit = doc.data().statusedit;
        	vstatusconfirm = doc.data().statusconfirm;

	        //statusedit == 2 (ล็อคการแก้ไขรหัสและชื่อ-สกุล)
	        //StatusConfirm == 9 (ล็อคการเข้าใช้โปรแกรม)
	        if(doc.data().statusconfirm==9) {
	    		document.getElementById('gotopage').style.display='none';
		        //alert("กรุณารอการตรวจสอบข้อมูล/ทำการตรวจสอบความถูกต้องของข้อมูลอีกครั้ง");
	        	localStorage.removeItem("LineLogin");
	        	window.location = "checkprofile.html";
	        } 
	        sessionStorage.setItem("LineLogin", doc.data().statuspass);
			sessionStorage.setItem("EmpName", doc.data().empName);
			sessionStorage.setItem("EmpID", doc.data().empID);
			sessionStorage.setItem("EmpBR", doc.data().empBr);
	    	//document.getElementById('gotopage').style.display='block';
			//alert(gLineID+"---2");

			//sessionStorage.setItem("LineLogin", doc.data().statuspass);

			//sessionStorage.setItem("Eid", doc.id);
			//sessionStorage.setItem("QStatus", doc.data().QStatus);
			//sessionStorage.setItem("QRatio2", doc.data().QRatio);
			//sessionStorage.setItem("QDateTime2", doc.data().QDateTime);
			//$("#DisplayQRatio2").html(doc.data().QRatio);
			//$("#DisplayQDateTime2").html("เมื่อวันที่ "+doc.data().QDateTime);
		});
	});

	db.where('lineID','==',gLineID).get().then(function(doc) {
	    if (!doc.empty) {
	    	//alert("มีข้อมูลอยู่แล้ว");
			//alert(sessionStorage.getItem("EmpName")+"----"+gLineID+"7777");
			if(vstatusconfirm!=9) {
		    	document.getElementById('gotopage').style.display='block';
			}
	        //console.log("Document data:", doc[0].data());
	    } else {
			//alert("ยังไม่มีข้อมูล");
	        console.log("No such document!");
	        window.location = "adddata.html";
			//SaveProfile();
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}



function SaveProfile() {
 	var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    //if(CheckUserID=="1") {
	//	db.doc(Eid).update({
    //    lastcheckin : dateString
    //  });
    //} else {
	db.add({
		lineID : vLineID,
		linename : vLineName,
		empPicture : vLinePicture,
		lastcheckin : dateString
	});       
    //}
}



function check1(gLineID) {
	alert("Gid : "+gLineID);
	db.where('lineID','==',gLineID).get().then((doc) => {
    if (doc.exists){
		//alert(doc.exists);
		//var city = doc.data();
		console.log(db.toString());
    	//alert(doc.exists);
	    alert("มีข้อมูลอยู่แล้ว");
    } else {
		alert("ยังไม่มีข้อมูล");
        console.log("No such document!");
		SaveProfile();
    }}).catch((error) => {
      console.log("Error getting document:", error);
    });
}



	} else {
	});
*/









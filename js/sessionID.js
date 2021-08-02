var ClearSession = "";

if (typeof(Storage) !== "undefined") {
  /*
  sessionStorage.clear();
  sessionStorage.setItem("LineID", ClearSession);
  sessionStorage.setItem("LineName", ClearSession);
  sessionStorage.setItem("LinePicture", ClearSession);
  sessionStorage.setItem("LineLogin", ClearSession);
  sessionStorage.setItem("EmpName", ClearSession);
  sessionStorage.setItem("EmpID", ClearSession);
  sessionStorage.setItem("EmpBR", ClearSession);
  */
} else {
  alert("กรุณาติดต่อผู้ดูแลระบบ");
  //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

//sessionStorage.clear();
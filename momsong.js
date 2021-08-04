var cleararray = "";
var NameSong = "";
var NameVDO = "";



$(document).ready(function () {
  //document.getElementById('btn-1').style.display='block';
  //document.getElementById('btn-2').style.display='none';
  //document.getElementById('btn-3').style.display='none';
});
            

function DisplaySong(n) {
  document.getElementById('id01').style.display='block';
  if(n==1) {
    NameSong = '<div class="box-text3">เพลงอิ่ม อุ่น : ศุ บุญ เลี้ยง</div>';
    NameVDO = '<div><iframe width="280" height="158" src="https://www.youtube.com/embed/jLSUsGtrBKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    NameText = '<div class="YoutubeText">อุ่นใดใด โลกนี้มิมีเทียบเทียม<br>อุ่นอกอ้อมแขน อ้อมกอดแม่ตระกอง<br>รักเจ้าจึงปลูก รักลูกแม่ย่อมห่วงใย<br>ไม่อยากจากไปไกล แม้เพียงครึ่งวัน<br><br>ให้กายเราใกล้กัน ให้ดวงตาใกล้ตา<br>ให้ดวงใจเราสองเชื่อมโยงผูกพัน</div>';
  } else if(n==2) {
    NameSong = '<div class="box-text3">เพลงของขวัญวันแม่ : แดน วรเวช</div>';
    NameVDO = '<div><iframe width="280" height="158" src="https://www.youtube.com/embed/gU7ghmJ0iCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    NameText = '<div class="YoutubeText">เพิ่งรู้ว่าแม่ก้อเหงา ตอนที่ขอให้เราโทรไป<br>เพิ่งรู้ว่าแม่น้อยใจ เมื่อเราอายไม่ยอมให้กอดเรา<br>เพิ่งรู้ว่าเก็บไปคิด ว่าลูกไม่รักเหมือนเก่า<br>เพิ่งรู้ว่าแม่ก็เศร้า เมื่อเราเถียงเมื่อเราขัดใจ</div>';
  } else if(n==3) {
    NameSong = '<div class="box-text3">เพลงคิดถึงพ่อ คิดถึงแม่ คิดถึงบ้าน : น้ององุ่น</div>';
    NameVDO = '<div><iframe width="280" height="158" src="https://www.youtube.com/embed/WEFOVJwnaVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    NameText = '<div class="YoutubeText">ได้ยินหมอลำ ครวญคร่ำตามสายลมมา<br>สุดแสดเหว่ว้าเมื่อมาพักอยู่เมืองไกล<br>มองสองข้างทาง ตึกสูงบังฟ้าบังใจ<br>อกเอ๋ยอกคนบ้านไพรน้ำตาหลั่งไหลไกลบ้าน</div>';
  } else if(n==4) {
    NameSong = '<div class="box-text3">เพลงจุดธูปบอกแม่ : FLAME</div>';
    NameVDO = '<div><iframe width="280" height="158" src="https://www.youtube.com/embed/COlNNFakOrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    NameText = '<div class="YoutubeText">บอกตัวเองให้กลั้นน้ำตาไว้ ไม่ให้ร้อง ไม่ให้น้อยใจ<br>ใกล้ถึงวันแม่ทีไร น้ำตาจะไหลขึ้นมา<br>แม่จากลูกไปตั้งแต่เด็กน้อย มีปมติดตัวคือกำพร้า<br>พยายามเข้มแข็งเรื่อยมา แต่บางเวลาอ่อนล้าเกินไป</div>';
  } else if(n==5) {
    NameSong = '<div class="box-text3">เพลงแม่ : Loso</div>';
    NameVDO = '<div><iframe width="280" height="158" src="https://www.youtube.com/embed/bimw4o6wNtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    NameText = '<div class="YoutubeText">ป่านนี้ จะเป็นอย่างไร<br>จากมาไกล แสนนาน<br>คิดถึง คิดถึงบ้าน<br>จากมาตั้งนาน เมื่อไรจะได้กลับ</div>';
  } 
  var str = "";
  str+= NameSong+''+NameVDO+''+NameText;
  //str+= '<iframe width="90%" height="200" src="https://web.microsoftstream.com/embed/video/3d5887a4-18f7-4584-9ca9-34f34fa28a13?autoplay=false&showinfo=true" allowfullscreen style="border:none;"></iframe>';

  $("#DisplayYoutube").html(str); 

}

function CloseAll() {
    $('iframe').attr('src', $('iframe').attr('src'));
    document.getElementById('id01').style.display='none';
}



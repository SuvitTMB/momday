var cleararray = "";
var SelectCard = 0;
var nSelectCard = "";
var SelectMsg = 0;
var nSelectMsg = "";

var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
var sLineName = "Website";
var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";


$(document).ready(function () {
  document.getElementById('ShowCard').style.display='none';
  SelectCard = getParameterByName('SelectCard');
  SelectMsg = getParameterByName('SelectMsg');
  CreateCard();
  //alert(SelectCard+"---"+SelectMsg);
});



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



function CreateCard() {
  //document.getElementById("pictureUrl").html(sLinePicture);
  //document.getElementById("displayName").append(sLineName);
  if(SelectCard==1) { nSelectCard = "./img/momCard-1.jpg"; } else 
  if(SelectCard==2) { nSelectCard = "./img/momCard-2.jpg"; } else 
  if(SelectCard==3) { nSelectCard = "./img/momCard-3.jpg"; } else 
  if(SelectCard==4) { nSelectCard = "./img/momCard-4.jpg"; } else 
  if(SelectCard==5) { nSelectCard = "./img/momCard-5.jpg"; } else
  if(SelectCard==6) { nSelectCard = "./img/momCard-6.jpg"; } else 
  if(SelectCard==7) { nSelectCard = "./img/momCard-7.jpg"; } else 
  if(SelectCard==8) { nSelectCard = "./img/momCard-8.jpg"; } 

  if(SelectMsg.length<2) {
    //alert(SelectMsg.length);
    if(SelectMsg==1) { nSelectMsg = "แม่คือพระคือนางฟ้าเทวดา<br>ให้กำเนิดเกิดลูกมาเลี้ยงจนใหญ่<br>ดูแลลูกไม่ให้มีอันตราย<br>สักการะจากหัวใจของลูกเอย"; } else 
    if(SelectMsg==2) { nSelectMsg = "ประนมมือก้มกราบลงบนตัก<br>ด้วยความรักความเคารพต่อแม่ฉัน<br>ซึ้งพระคุณอันยิ่งใหญ่มากอนันต์<br>ใจเบิกบานแสนอบอุ่นวันแม่เอย"; } else 
    if(SelectMsg==3) { nSelectMsg = "รักของแม่ตราตรึงใจประทับใจ<br>มอบชีวิตเลี้ยงลูกรักจนเติบใหญ่<br>ขอสัญญาว่าเมื่อลูกนี้โตไป<br>เป็นผู้ใหญ่เป็นคนดีของสังคม"; } else 
    if(SelectMsg==4) { nSelectMsg = "มีวันนี้เพราะมีแม่คอยพร่ำสอน<br>ยามจะนอนคอยพัดวีให้สุขสันต์<br>คอยถนอมและปกป้องไม่มีหวั่น<br>ก้มกราบกรานด้วยสำนึกในพระคุณ"; } else 
    if(SelectMsg==5) { nSelectMsg = "แสนดีใจที่เกิดมาเป็นลูกแม่<br>คอยเทคแคร์ดูแลลูกไม่เคยห่าง<br>แม่ประคบประหงมลูกทุกเส้นทาง<br>มีทุกอย่างเป็นเพราะแม่ดูแลเรา"; }
  } else {
    nSelectMsg = SelectMsg;
  }

  var str = "";
  str+= '<div class="IMGOverImg" style="margin-left:-20px;">';
  str+= '<img src="'+ nSelectCard +'" style="width:100%;border-radius: 5px;">';
  //str+= '<div class="top-left">Line Retail Society<div class="text-date">12 สิงหาคม 2564</div>';
  str+= '<div class="top-left"><div style="margin:20px 0 0 -4px;color:#ffffff;font-size:11px;">by '+ sLineName +'</div>';
  str+= '<div class="Centered">'+ nSelectMsg +'</div>';
  str+= '<div class="top-right"><img src="'+sLinePicture+'" width="70px;">';
  str+= '</div>';
  //str+= '<div class="img_profiletext">'+ sLineName +'</div></div>';
  str+= '</div>';
  $("#DisplayIMG").html(str); 

  //$("#DisplayCard").html(str); 
}


class Drawer {

  constructor(element, text = '') {
    // холст
    this.canvas = element;
    this.context = this.canvas.getContext('2d');
    this.padding = 1;
    // текст и шрифт
    this.text = text;
    this.fontSize = 1;
    this.context.font = `bold ${this.fontSize}px sans-serif`;
    this.context.textBaseline = 'top';
    // цвета
    this.textColor = '#151515';
    this.bgColor = '#FFF';
    // изображение
    this.image = null;
    this.imageLoaded = false;
    // первоначальная отрисовка
    this.render();
  }

  renderBackground() {
    this.context.fillStyle = this.bgColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  renderText() {
    this.context.fillStyle = this.textColor;
    this.context.fillText(this.text, this.padding, this.padding);
  }

  renderImage() {
    //const imageRatio = this.image.width / this.image.height;
    const imageRatio = this.image.width / this.image.height;
    const imageTop = this.padding * 2 + this.fontSize;
    // Простая отрисовка изображения по ширине холста
    this.context.drawImage(this.image, 0, imageTop, this.canvas.width, this.canvas.width / imageRatio);
  }

  setImage(src) {
    this.imageLoaded = false;
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
      this.render();
    };
    this.image.src = src;
  }

  readImage(file) {
    if (file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.onload = e => this.setImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      alert('Необхожимо загрузить изображение');
    }
  }

  setText(text) {
    this.text = text;
    this.render();
  }

  render() {
    this.renderBackground();
    this.renderText();
    if (this.imageLoaded) this.renderImage();
  }

  download() {
    alert("Download");
    var link = document.createElement('a');
    link.href = this.canvas.toDataURL('image/jpeg');
    link.download = 'picture.png';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }}



// DOM-элементы
const textInput = document.querySelector('input[type="text"]');
const fileInput = document.querySelector('input[type="file"]');
const canvas = document.querySelector('canvas');
const button = document.querySelector('button');

// Создаем экземпляр нашего "рисовальщика"
const drawer = new Drawer(canvas, textInput.value);

// Обработчик изменения текста в поле => перерисовать
textInput.addEventListener('keyup', function () {
  drawer.setText(textInput.value);
});

// Обработчик выбора файла => считать файл
fileInput.addEventListener('change', function (e) {
  const { files } = e.target;
  if (files && files.length) drawer.readImage(files[0]);
});

// Обработчик клика на кнопке => скачать
button.addEventListener('click', () => drawer.download());


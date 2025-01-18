//Funzione che serve a mantenere in alto la barra di navigazione durante lo scorrimento della pagina
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  navbar.style.position = "fixed";
  navbar.style.top = "0";
  navbar.style.left = "0";
  navbar.style.width = "100%";
});
/********************************************************************************************/
//Funzione per mostrare e nascondere la barra di navigazione
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  } else {
    navbar.classList.add("show");
  }
}
/********************************************************************************************/
//Funzione che ridimensiona l'intestazione
window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("small");
  } else {
    header.classList.remove("small");
  }
});
/********************************************************************************************/
//Codice per il color-picker RGB
function colorRGB(){
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");
  var colorPreview = document.getElementById("color-preview");
  var colorHex = document.getElementById("color-hex");
  var colorRgb = document.getElementById("color-rgb");
  var hex = document.getElementById("hex");
  function hexToRgb(hex) {
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);
    return "rgb(" + decimalToHexadecimal(r) + "," + decimalToHexadecimal(g) + "," + decimalToHexadecimal(b) + ")";
  
  }
  function updateColor() {
    var r = red.value;
    var g = green.value;
    var b = blue.value;
    var color = "rgb(" + r + "," + g + "," + b + ")";
    colorPreview.style.backgroundColor = color;
    if (r < 16 && r != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b);
      hex.value = "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b);
    }
    if (g < 16 && g != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);
    }
    if (b < 16 && b != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (r < 16 && g < 16 && r != 0 && g != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);;
      hex.value = "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);;
    }
    if (r < 16 && b < 16 && r != 0 && b != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (g < 16 && b < 16 && g != 0 && b != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (r < 16 && g < 16 && b < 16 && r != 0 && g != 0 && b != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (r < 16 && r != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b);
      hex.value = "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b);
    }
    if (g < 16 && g != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);
    }
    if (b < 16 && b != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (r < 16 && g < 16 && r != 0 && g != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);;
      hex.value = "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + decimalToHexadecimal(b);;
    }
    if (r < 16 && b < 16 && r != 0 && b != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = "0" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (g < 16 && b < 16 && g != 0 && b != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (r < 16 && g < 16 && b < 16 && r != 0 && g != 0 && b != 0) {
      colorHex.innerHTML = "#" + "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
      hex.value = "0" + decimalToHexadecimal(r) + "0" + decimalToHexadecimal(g) + "0" + decimalToHexadecimal(b);
    }
    if (r == 0) {
      colorHex.innerHTML = "#" + "00" + decimalToHexadecimal(g) + decimalToHexadecimal(b);
      hex.value = "00" + decimalToHexadecimal(g) + decimalToHexadecimal(b);
    }
    if (g == 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + "00" + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + "00" + decimalToHexadecimal(b);
    }
    if (b == 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + "00";
      hex.value = decimalToHexadecimal(r) + decimalToHexadecimal(g) + "00";
    }
    if (r == 0 && g == 0) {
      colorHex.innerHTML = "#" + "00" + "00" + decimalToHexadecimal(b);;
      hex.value = "00" + "00" + decimalToHexadecimal(b);;
    }
    if (r == 0 && b == 0) {
      colorHex.innerHTML = "#" + "00" + decimalToHexadecimal(g) + "00";
      hex.value = "00" + decimalToHexadecimal(g) + "00";
    }
    if (g == 0 && b == 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + "00" + "00";
      hex.value = decimalToHexadecimal(r) + "00" + "00";
    }
    if (r == 0 && g == 0 && b == 0) {
      colorHex.innerHTML = "#" + "00" + "00" + "00";
      hex.value = "00" + "00" + "00";
    }
    if (r != 0 && g != 0 && b != 0) {
      colorHex.innerHTML = "#" + decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b);
      hex.value = decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b);
    }
    colorRgb.innerHTML = color;
  }
  
  
  red.addEventListener("input", updateColor);
  green.addEventListener("input", updateColor);
  blue.addEventListener("input", updateColor);
  
  hex.addEventListener("input", function () {
    var color = "#" + hex.value;
    colorPreview.style.backgroundColor = color;
    colorHex.innerHTML = color;
    colorRgb.innerHTML = hexToRgb(color);
  });
  
  function decimalToHexadecimal(decimal) {
    let hexadecimal = "";
    let hexValues = "0123456789ABCDEF";
    while (decimal > 0) {
      let hexValue = decimal % 16;
      hexadecimal = hexValues[hexValue] + hexadecimal;
      decimal = Math.floor(decimal / 16);
    }
    return hexadecimal;
  }
}
/********************************************************************************************/
//Codice per il color-picker HSL
function colorHSL(){
  const square = document.getElementById("square");
  const hue = document.getElementById("hue");
  const saturation = document.getElementById("saturation");
  const lightness = document.getElementById("lightness");
  const hueValue = document.getElementById("hue-value");
  const saturationValue = document.getElementById("saturation-value");
  const lightnessValue = document.getElementById("lightness-value");
  
  hue.addEventListener("input", updateSquare);
  saturation.addEventListener("input", updateSquare);
  lightness.addEventListener("input", updateSquare);
  
  function updateSquare() {
    square.style.backgroundColor = `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
    hueValue.textContent = hue.value;
    saturationValue.textContent = saturation.value;
    lightnessValue.textContent = lightness.value;
  }
}
/********************************************************************************************/
//Codice calcolo dimensione di un'immagine
function calculate1() {
  var altezza = document.getElementById("altezza").value;
  var larghezza = document.getElementById("larghezza").value;
  var profondità = document.getElementById("profondità").value;
  
  var dim = (parseFloat(altezza) * parseFloat(larghezza) * parseFloat(profondità))/8;
  var count = 0;
  
  while (dim >= 1  && (dim /1024)>=1) {
    dim = dim / 1024;
    count++;
  }
  var dim = parseFloat(dim.toFixed(2));
  switch (count) {
  case 0:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "B";
    break;
  case 1:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "kB";
    break;
  case 2:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "MB";
    break;
  case 3:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "GB";
    break;
  case 4:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "TB";
    break;
  case 5:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "PB";
    break;
  case 6:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "EB";
    break;
  case 7:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "ZB";
    break;
  case 8:
    document.getElementById("output1").innerHTML = "La foto pesa " + dim + "YB";
    break;
  }
}
/********************************************************************************************/
//Codice calcolo dimensione di un video
function calculate2() {
  var durata = document.getElementById("durata").value;
  var fps = document.getElementById("fps").value;
  var altezza1 = document.getElementById("altezza1").value;
  var larghezza1 = document.getElementById("larghezza1").value;
  var profondità1 = document.getElementById("profondità1").value;

  var dim1 = (parseFloat(durata) * parseFloat(fps) * parseFloat(altezza1) * parseFloat(larghezza1) * parseFloat(profondità1))/8;
  var count = 0;

  while (dim1 >= 1  && (dim1 /1024)>=1) {
    dim1 = dim1 / 1024;
    count++;
  }
  var dim1 = parseFloat(dim1.toFixed(2));
  switch (count) {
  case 0:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "B";
    break;
  case 1:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "kB";
    break;
  case 2:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "MB";
    break;
  case 3:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "GB";
    break;
  case 4:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "TB";
    break;
  case 5:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "PB";
    break;
  case 6:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "EB";
    break;
  case 7:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "ZB";
    break;
  case 8:
    document.getElementById("output2").innerHTML = "Il video pesa " + dim1 + "YB";
    break;
  }
}
/********************************************************************************************/
//Codice calcolo dimensione di un suono
function calculate3() {
  var durata1 = document.getElementById("durata1").value;
  var nbit = document.getElementById("nbit").value;
  var campioni = document.getElementById("campioni").value;
  var canali = document.getElementById("canali").value;

  var dim2 = (parseFloat(durata1) * parseFloat(nbit) * parseFloat(campioni) * parseFloat(canali))/8;
  var count = 0;

  while (dim2 >= 1  && (dim2 /1024)>=1) {
    dim2 = dim2 / 1024;
    count++;
  }
  var dim2 = parseFloat(dim2.toFixed(2));
  switch (count) {
  case 0:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "B";
    break;
  case 1:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "kB";
    break;
  case 2:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "MB";
    break;
  case 3:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "GB";
    break;
  case 4:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "TB";
    break;
  case 5:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "PB";
    break;
  case 6:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "EB";
    break;
  case 7:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "ZB";
    break;
  case 8:
    document.getElementById("output3").innerHTML = "L'audio pesa " + dim2 + "YB";
    break;
  }
}
/********************************************************************************************/
//Codice dell'animazione della girandola
function girandolaFPS() {
  const star = document.querySelector('.star');
  const slider = document.getElementById('fps-slider');
  let angle = 0;
  let fps = 90;
  let intervalId;
  const fpsCounter = document.querySelector('.fps-counter');
  const switchButton = document.getElementById('switch-button');
  function updateFpsCounter() {
    fpsCounter.textContent = "Frame rate: " + (fps/3) + " fps";
  }
  slider.addEventListener('input', function() {
    fps = this.value;
    clearInterval(intervalId);
    if (switchButton.checked) {
      startAnimation();
    }
  });
  function startAnimation() {
    intervalId = setInterval(function() {
      angle += (360/fps);
      star.style.transform = `rotate(${angle}deg)`;
      updateFpsCounter();
    }, 2750 /fps);
  }
  switchButton.addEventListener('click', function() {
    if (switchButton.checked) {
      startAnimation();
    } else {
      clearInterval(intervalId);
    }
  });
}
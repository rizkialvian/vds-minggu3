let arr = [];
let dataBar = [];
let dataPie = [];

function setup() {
  //put setup code here
  createCanvas(windowWidth, windowHeight)

  //mengisi array arr
  arr = [11, 12, 13, 14, 15];

  //mengisi array dataBarmenggunakan perulangan
  for (var i=0; i<10; i++) {
    dataBar[i] = random(0,100)
  }

  // data pie chart
  dataPie = [2345, 345, 234, 34, 543];
}

//membuat tampilan agar responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(20)

  //membuat garis pembagi pada layar
  stroke(255,255,255)
  line(0,
    windowHeight/2,
    windowWidth,
    windowHeight/2);
  
  line(windowWidth/2,
    0,
    windowWidth/2,
    windowHeight);

  //membuat diagram batang
  var dx = 25
  var x = 10
  var margin = 10
  var lebarBar = windowWidth/2 - 2*margin
  var dx = lebarBar / dataBar.length //untuk jarak antar batang

  for (var i=0; i<dataBar.length; i++) { 
    rect(x, //batang dimulai dari x
      y = 100, 
      width = 20,
      height = dataBar[i]) //tinggi batang sesuai data ke-i
    
    x = x + dx
  }

  //pie chart
  var total = 0;
  for (var i=0; i<dataPie.length; i++) {
    total = total + dataPie[i]
  }

  var colors = ['purple', 'blue', 'green', 'red','brown'];
  var lastAngle = 0;
  for (var i=0; i < dataPie.length; i++) {
    var angle = dataPie[i] / total*360;
    fill(colors[i])
    arc(
      x = 3/4 * windowWidth,
      y = 1/4 * windowHeight,
      width = 100,
      height = 100,
      angle1 = lastAngle,
      angle2 = lastAngle + radians(angle)
    )
    lastAngle = lastAngle + radians(angle)
  }
  console.log(total)
}
function preload(){
  // put preload code here
}

let i = 30
let j = i + 10
const mycolors = ["powderblue", "sandybrown", "palegreen"]

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("black")
  // put setup code here
}

function draw() {
  let c = random(10, i);
  let myc= random(mycolors);

  for(let x=j; x<(width-j); x+=i){
    for(let y=j; y<(height-j); y+=i){
      fill(color(myc));
      ellipse(x, y, c);

      if(mouseIsPressed){
    strokeWeight(4);
    ellipse(x, y, c+20);
  }
    else {
      strokeWeight(1);
    }
    }
  }
}

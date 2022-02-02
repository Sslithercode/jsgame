canvas = document.getElementById("MainCanvas")
ctx = win.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Rect{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

r1 = new Rect(0,0,50,50)


function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    r1.draw()
}
let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let isDrowing = false

window.addEventListener('load' , ()=>{
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})
function startDrow(){
    isDrowing = true
    ctx.beginPath()
}
function drawing(e){
    if(!isDrowing) return
    ctx.lineTo(e.offsetX , e.offsetY)
   
    
    ctx.stroke()
}
function x(e){
  isDrowing =false
}
canvas.addEventListener('mouseup', x)
canvas.addEventListener('mousedown' , startDrow)
canvas.addEventListener('mousemove' , drawing)

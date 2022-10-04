
var colorArray=['red','yellow','blue','green']
var body=document.getElementsByTagName("body")[0]
var btnRandomColor=document.getElementsByClassName("randomColorButton")[0]
btnRandomColor.addEventListener("click",()=>{
    
    
    var colorValue=getRandomColor()
    console.log(colorValue)
    body.style.backgroundColor=colorValue
    
})

function getRandomColor(){
    var index=Math.floor(Math.random()*4)
    return(colorArray[index])
}


var hexButton=document.getElementsByClassName("hexColor")[0]
hexButton.addEventListener("click",()=>{
    document.getElementsByClassName("script4")
})
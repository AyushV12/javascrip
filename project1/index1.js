
var hexaDecimalValues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var body=document.getElementsByTagName("body")[0]
var btnRandomColor=document.getElementsByClassName("randomColorButton")[0]
btnRandomColor.addEventListener("click",()=>{
    
    
    var colorValue=getRandomColor()
    console.log(colorValue)
    body.style.backgroundColor=colorValue
    document.getElementsByClassName("colorValue")[0].innerHTML=colorValue
    
})
function getRandomValue(){
    var  index= Math.floor(Math.random()*hexaDecimalValues.length)
    return(hexaDecimalValues[index])
}
function getRandomColor(){
var string=''
console.log(string)
for(let i=0;i<6;i++) {
    string+=getRandomValue()
}
return(string)
}


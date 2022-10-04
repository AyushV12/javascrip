var incrementButton= document.getElementsByTagName("button")[0]
var decrementButton= document.getElementsByTagName("button")[1]
var count=document.getElementById("count1")
var container=document.getElementsByClassName("container")[0]
var inputCount = document.getElementsByClassName("inputItems inputNoOfCounters")[0]
document.getElementsByClassName("generateButton inputItems")[0].addEventListener("click", () => {

    var countOfCounters = parseInt(inputCount.value)

    generateCounters(countOfCounters)
})
function generateCounters(n){
   
for(let i=0;i<n;i++){

    var counterContainer=document.createElement("div")
    counterContainer.classList+="countercontainer"
    container.appendChild(counterContainer)
    var c=document.createElement("span")
    c.className=`count${i}`
    c.innerText=0
    counterContainer.appendChild(c)
    var buttonContainer=document.createElement("div")
    buttonContainer.classList+="buttonContainer"
    var incBtn=document.createElement("button")
    counterContainer.appendChild(buttonContainer)
    incBtn.innerText="Increment"
    buttonContainer.appendChild(incBtn)
    incBtn.addEventListener("click",()=>{changeCount(c.className,1)})
    var decBtn=document.createElement("button")
    buttonContainer.appendChild(decBtn)
    decBtn.innerText="Decrement"
    decBtn.addEventListener("click",()=>{changeCount(`count${i}`,-1)})

}
console.log(container)
}
function changeCount(countClass,flag){
    console.log(countClass)
    var count=document.getElementsByClassName(`${countClass}`)[0]
    console.log(count)
    count.innerText=parseInt(count.innerText)+flag
}


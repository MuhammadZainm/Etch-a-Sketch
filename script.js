
alert("To ERASE First right click and then hover")

  const container= document.querySelector("#container")
function makeStuff(n){
  
container.innerHTML = "";

// col.classList("col")
for(j=0;j<n;j++){
    
    const col=document.createElement("div")
     col.classList.add("col")
for(i=0;i<n;i++){
   const divs=document.createElement("div")
   divs.classList.add("cell")
   col.appendChild(divs) 
}

container.appendChild(col)


}
let mousedown=2;
document.addEventListener("mousedown",()=>{
    mousedown=1;
})
document.addEventListener("mouseup",()=>{
    mousedown=2;
})
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    mousedown=3;
      
})
document.querySelectorAll(".cell").forEach(c => {
    c.dataset.shade = 0; // track how many times hovered

    c.addEventListener("mouseover", () => {
        if(mousedown===1){
        let shade = parseInt(c.dataset.shade);
        if (shade < 10) {
            shade++;
            c.dataset.shade = shade;
            let r=Math.floor(Math.random()*256)
            let g=Math.floor(Math.random()*256)
            let b=Math.floor(Math.random()*256)
            c.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${shade / 10})`; 
            // grey with opacity increasing
        }
    } else if(mousedown===3){
c.style.backgroundColor="white"
        }});
    });
}
makeStuff(16)
const btnmode=document.createElement("div")
btnmode.id="mode"
const btnpop=document.createElement("button")
btnpop.id="popup"
btnpop.style.width="100px"
btnpop.style.height="100px"
btnpop.style.border="8px solid darkblue"
btnpop.style.backgroundColor="blue"
btnpop.style.borderRadius="10%"
btnpop.textContent="Number of Boxes"
btnmode.style.width="100px"
btnmode.style.height="100px"
btnmode.style.border="8px solid darkblue"
btnmode.style.backgroundColor="blue"
btnmode.style.borderRadius="10%"
btnmode.textContent="Mode"
const btnlist=document.querySelector("#buttons")
btnlist.appendChild(btnpop)
// btnlist.appendChild(btnmode)
btnpop.addEventListener("click", ()=>{
let newN=prompt("Enter Size of grid")
num=parseInt(newN)
if(num>0 && num<101 ){
    makeStuff(num)
}
else{
    alert("Please Enter a valid number from 1 to 100.")
}
})


let panels = document.querySelectorAll(".panel")
let panel2 = document.querySelector(".panel2")
let panel3 = document.querySelector(".panel3")
let panel4 = document.querySelector(".panel4")
let panel5 = document.querySelector(".panel5")



function checkPanel(){
    this.classList.toggle('open')
}

function checkOpened(){
    this.classList.toggle('opened')
}
panels.forEach(panel => panel.addEventListener('click',checkPanel))
panels.forEach(panel => panel.addEventListener('transitionend',checkOpened))



// panel1.addEventListener('click',()=>{
    
//         if (activated == false){
//         panel1.style.flexGrow = "4"
//         activated=true
//     } else{
//         panel1.style.flexGrow = "1"
//         activated=false
//     }
// })

// panel2.addEventListener('click',()=>{
    
//     if (activated == false){
//     panel2.style.flexGrow = "4"
//     activated=true
// } else{
//     panel2.style.flexGrow = "1"
//     activated=false
// }
// })

// panel3.addEventListener('click',()=>{
    
//     if (activated == false){
//     panel3.style.flexGrow = "4"
//     activated=true
// } else{
//     panel3.style.flexGrow = "1"
//     activated=false
// }
// })

// panel4.addEventListener('click',()=>{
    
//     if (activated == false){
//     panel4.style.flexGrow = "4"
//     activated=true
// } else{
//     panel4.style.flexGrow = "1"
//     activated=false
// }
// })

// panel5.addEventListener('click',()=>{
    
//     if (activated == false){
//     panel5.style.flexGrow = "4"
//     activated=true
// } else{
//     panel5.style.flexGrow = "1"
//     activated=false
// }
// })

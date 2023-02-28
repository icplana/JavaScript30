

function checkprops(){
let spacing = document.getElementById('spacing').value
let blur = document.getElementById('blur').value
let color = document.getElementById('base').value


console.log('test')
let suffix=this.dataset.sizing || ""
document.documentElement.style.setProperty(`--${this.name}`, this.value +suffix)
// document.documentElement.style.setProperty('--spacing',spacing+"px")
// document.documentElement.style.setProperty('--blur',blur+"px")
}
let input =document.querySelectorAll('input')
input.forEach(inp => inp.addEventListener('change',checkprops))

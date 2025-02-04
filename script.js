const button = document.getElementById("send")
const daynight = document.getElementById("daynight")
const body = document.querySelector("body")

daynight.addEventListener('click', ()=>{
    if (body.classList.toggle('dark-mode')){
        daynight.textContent = '🔆'
    }else{
        daynight.textContent = '🌙'
    }
});
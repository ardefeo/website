const bodySel = document.querySelector('body');
const modeToggle = document.getElementById('btn-check-2-outlined');
const modeStatus = document.querySelector('#mode-status');
const pageStatusTime = document.getElementById('pageloadtime')

//function to implement dark/light mode toggle
function toggleMode() {
    
    bodySel.classList.toggle('dark-mode')
    
    const modeMessage = bodySel.classList.contains('dark-mode') ? 
    'The lights are off!' 
    : "The lights are on!";

    modeStatus.innerText = modeMessage;
    
  
}

modeToggle.addEventListener('click', toggleMode);



window.addEventListener("load", function () {
    let time = performance.timing;
    let pageloadtime = time.loadEventStart - time.navigationStart;
    console.log(pageloadtime)
    pageStatusTime.innerText += pageloadtime + ' ms'
  })
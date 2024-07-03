document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.peoples');
    const scrollAmount = 10; 
    const intervalTime = 10; 
    
    let scrollInterval;

    function startScrolling() {
        scrollInterval = setInterval(() => {
            container.scrollLeft += scrollAmount;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                clearInterval(scrollInterval);
            }
        }, intervalTime);
    }

   

    startScrolling();

  
    container.addEventListener('mouseleave', startScrolling);
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.newsing');
    const scrollAmount = 10; 
    const intervalTime = 10; 
    
    let scrollInterval;

    function startScrolling() {
        scrollInterval = setInterval(() => {
            container.scrollLeft += scrollAmount;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                clearInterval(scrollInterval);
            }
        }, intervalTime);
    }

   

    startScrolling();

  
    container.addEventListener('mouseleave', startScrolling);
});

function shownaving(){
    const uli=document.getElementById("uli");
    uli.style.display="flex";
    uli.style.flexDirection="column";
    uli.classList.add("uliClass");
}



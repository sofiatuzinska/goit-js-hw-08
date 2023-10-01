function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };


    const start = document.querySelector("[data-start]")
    const stopBtn = document.querySelector("[data-stop]")
    const body = document.querySelector("body");

    let timerId = null;

    start.addEventListener("click", changeColor);
    stopBtn.addEventListener("click", stopChangingColors);


    function changeColor() {
       timerId = setInterval(changeBgColor, 1000);
       start.toggleAttribute('disabled');
    }

 
    function stopChangingColors() {
        clearInterval(timerId);
        start.removeAttribute('disabled');
    }

    function changeBgColor() {
        body.style.backgroundColor = getRandomHexColor();
    }



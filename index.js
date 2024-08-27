function clockInit(secID,minID,hrsID){
    const hrs = document.getElementById(hrsID);
    const min = document.getElementById(minID);
    const sec = document.getElementById(secID);
    let interval;       
    function setTime(){
        const date = new Date();
        hrs.textContent = date.getHours().toString().padStart(2,'0');
        min.textContent = date.getMinutes().toString().padStart(2,'0');
        sec.textContent = date.getSeconds().toString().padStart(2,'0');
    }
    function start(){
        setTime();
        interval = setInterval(setTime, 1000);
    }
    function stop(){``
        clearInterval(interval);    
    }
    return {setTime,start,stop};
}

const clock = clockInit('sec','min','hrs');
clock.start();
function displayTime(){
    let dateTime = new Date();

    var hrsIN = dateTime.getHours();
    let minsIN = dateTime.getMinutes();
    let secIN = dateTime.getSeconds();
    let sessionIN = document.querySelector('#sessionIN');

    let hrsUS= hrsIN-9;
    let minsUS;

    if (minsIN>=30){
        minsUS= minsIN-30;
    }else{
        hrsUS=hrsUS-1;
        minsUS=30+minsIN;
    }
    if (hrsUS<0){
        hrsUS+=24;
    }

    let secUS=secIN;
    let sessionUS = document.querySelector('#sessionUS');

    if(hrsIN>=12){
        sessionIN.innerHTML ='PM';
    }else{
        sessionIN.innerHTML ='AM';
    }
    if(hrsUS>=12){
        sessionUS.innerHTML ='PM';
    }else{
        sessionUS.innerHTML ='AM';
    }

    document.querySelector('#hoursIN').innerHTML =hrsIN;
    document.querySelector('#minutesIN').innerHTML =minsIN;
    document.querySelector('#secondsIN').innerHTML =secIN;

    document.querySelector('#hoursUS').innerHTML =hrsUS;
    document.querySelector('#minutesUS').innerHTML =minsUS;
    document.querySelector('#secondsUS').innerHTML =secUS;

}
setInterval(displayTime , 10);

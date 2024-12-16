function secManage() {
    let myDate = new Date();   

    // sec 
    const getSecElement = document.getElementById('time-sec');
    getSecElement.innerText = myDate.getSeconds(2);

    // min 
    const getMinElement = document.getElementById('time-min');
    getMinElement.innerText = myDate.getMinutes();

    // hour 
    const getHourElement = document.getElementById('time-hour');
    getHourElement.innerText = myDate.getHours();

    // day
    const getDayElement = document.getElementById('date-day');
    getDayElement.innerText = myDate.getDate();

    // month
    const getMonthElement = document.getElementById('date-month');
    const myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthIndex = myDate.getMonth();
    getMonthElement.innerText = myMonths[monthIndex];

    // year
    const getYeatElement = document.getElementById('date-year');
    getYeatElement.innerText = myDate.getFullYear();
};

setInterval(secManage, 1000);


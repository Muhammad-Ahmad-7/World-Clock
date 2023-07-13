setInterval(() => {
    // Pakistan Time Zone
let targetTimeZone = 'Asia/Karachi';
let currentDate = new Date();
let options = { timeZone: targetTimeZone };
let targetDate = currentDate.toLocaleString('en-US', options);
let time = targetDate.split(',')[1].trim();
let date = targetDate.split(',')[0].trim();
document.getElementById('pakTimeContainer').innerHTML = "Time: " + time + "<br>Date: " + date;

// Turkia Time Zone

targetTimeZone = 'Europe/Istanbul';
currentDate = new Date();
options = { timeZone: targetTimeZone };
targetDate = currentDate.toLocaleString('en-US', options);
time = targetDate.split(',')[1].trim();
date = targetDate.split(',')[0].trim();
document.getElementById('turkiaTimeContainer').innerHTML = "Time: " + time + "<br>Date: " + date;


// China Time Zone

targetTimeZone = 'Asia/Shanghai';
currentDate = new Date();
options = { timeZone: targetTimeZone };
targetDate = currentDate.toLocaleString('en-US', options);
time = targetDate.split(',')[1].trim();
date = targetDate.split(',')[0].trim();
document.getElementById('chinaTimeContainer').innerHTML = "Time: " + time + "<br>Date: " + date;


}, 1000);

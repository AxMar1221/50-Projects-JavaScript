window.addEventListener('load', () => {
    console.log('what time is in the world?')
});

const hourEle = document.querySelector('.hour');
const minuteEle = document.querySelector('.minute');
const secondEle = document.querySelector('.second');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']

toggle.addEventListener('click', ( eve ) => {
    const html = document.querySelector('html')
    if ( html.classList.contains('dark')) {
        html.classList.remove('dark');
        eve.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        eve.target.innerHTML = 'Light Mode';
    }
    console.log(toggle)
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEle.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0 ,12, 0 ,360)}deg)`;
    minuteEle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0 ,60, 0 ,360)}deg)`;
    secondEle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0 ,60, 0 ,360)}deg)`;

    timeEle.innerHTML = `${hoursForClock}.${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`
    dateEle.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) +out_min;
}

setTime()
setInterval(setTime, 1000 );

setInterval('location.reload()', 600000 );
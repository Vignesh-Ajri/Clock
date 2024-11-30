const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerText = 'Light mode';
    }
});

function setTime() {
    const time = new Date();
    const month = monthNames[time.getMonth()];
    const day = dayNames[time.getDay()];
    const date = time.getDate();
    const hrs = time.getHours();
    const hours = hrs % 12 || 12; 
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const ampm = hrs >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`;
    minEl.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`;
    secEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec} ${ampm}`;
    dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime()
setInterval(setTime, 1000);

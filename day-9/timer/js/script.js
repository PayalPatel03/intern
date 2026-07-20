let time = document.getElementById('time').textContent;
let id;

let startTimer = () => {
    id = setInterval(() => {
        if (time == 0) {
            clearInterval(id);
            return;
        }
        time--;
        document.getElementById('time').textContent = time > 9 ? time : '0' + time;
    }, 1000);
}

let stopTimer = () => {
    clearInterval(id);
}

let resetTimer = () => {
    clearInterval(id);
    time = 60;
    document.getElementById('time').textContent = time;
};

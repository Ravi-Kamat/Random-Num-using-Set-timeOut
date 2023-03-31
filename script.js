
const delay = 5000;


let countdown = delay / 1000;
let interval = setInterval(() => {
    console.log(`Generating random number in ${countdown} seconds...`);
    countdown--;
    if (countdown === 0) {
        clearInterval(interval);
    }
}, 1000);


setTimeout(() => {
    let randomNum = Math.floor(Math.random() * 100);
    console.log(`Random number generated: ${randomNum}`);
}, delay);

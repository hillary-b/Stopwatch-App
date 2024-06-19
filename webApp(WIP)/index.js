const containerEl = document.querySelector('.container')
const numbers = [0]
const lastNum = []

let numbersIndex = 0
let charIndex = 0
let counter = 0

/*function updateStopwatch(){
    charIndex++
    containerEl.innerHTML = `
    <h1>Stopwatch(s): ${numbers[numbersIndex].slice(0,charIndex)} </h1>
    `;

    if(charIndex === numbers[numbersIndex].length){
        numbersIndex++
        charIndex = 0
    }

    if(numbersIndex === numbers.length){
        numbersIndex = 0
    }
    setTimeout(updateStopwatch, 400);
}*/

containerEl.innerHTML =`
<button id="start" onclick="updateStopwatch()">START</button> 
`;

function updateStopwatch(){
            containerEl.innerHTML = `
            <h1>Stopwatch: ${numbers[numbersIndex]}(s) </h1>
            <button id="stop">STOP</button>
            `;
            charIndex++
            counter++
            numbersIndex++

        if(numbersIndex === numbers.length){
            numbersIndex = 0
        }
    numbers.push(counter)
    setTimeout(updateStopwatch, 1000);
    document.getElementById("stop").addEventListener("click", stopStopwatch)
    return;
} 

function stopStopwatch(){
    const last = numbers[numbers.length - 1];
    lastNum.push(last)
    const stopNum = lastNum[0];
    containerEl.innerHTML = `
    <h1>Stopped at: ${stopNum}seconds</h1>
    <button id="reset" onclick="resetStopwatch()">RESET</button>
    `;
}

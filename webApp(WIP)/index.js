const containerEl = document.querySelector('.container')
const numbers = [1]

let numbersIndex = 0
let charIndex = 0
let counter = 1

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

/*function stopStopwatch(){
    containerEl.innerHTML=`
    <h1>Stopped at: </h1>
    `;
}*/


function updateStopwatch(){
        charIndex++
            containerEl.innerHTML = `
            <h1>Stopwatch(s): ${numbers[numbersIndex]} </h1>
            `;
            numbersIndex++

        if(numbersIndex === numbers.length){
            numbersIndex = 0
        }
        counter++
        numbers.push(counter)
    setTimeout(updateStopwatch, 1000);

} 

function stopStopwatch(){
    containerEl.innerHTML=`
    <h1>Stopped at: ${numbers[numbers.length - 1]}</h1>
    `;
}


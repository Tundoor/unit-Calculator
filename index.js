const lengthDiv = document.getElementById('length-div')
const volumeDiv = document.getElementById('volume-div')
const massDiv = document.getElementById('mass-div')
const tempDiv = document.getElementById('temp-div')
const userInput = document.getElementById('user-input')
const submit = document.getElementById('submit')

// paragrapgh Logic
function updateParagraph ( displayStr, div) {
    let el = document.createElement('p');
    el.classList.add("desc-paragraph")
    el.textContent = displayStr
    div.append(el)
}

function lengthCalc (num) {
   let str = `Cm to Inches: ${ (num *  0.3937).toFixed(2)} | Meters to Feet: ${(num * 3.2808).toFixed(2)} | Meters To Yards: ${(num * 1.0936).toFixed(2)} | Km to Miles ${(num * 1.0936).toFixed(2)}`
   return str 
}

function volCalc (num) {
    let str = `ml to ounces: ${ (num * 0.0338).toFixed(2)} | l to gallons: ${(num * 0.2642).toFixed(2)} | l to quarts(qt): ${(num * 1.0567).toFixed(2)} `
   return str 
}

function massCalc (num) {
    let str = `Grams to Ounces: ${ (num * 0.0353).toFixed(2)} | Kilograms to pounds: ${(num * 2.2046).toFixed(2)} `
   return str 
}

function tempCalc (num) {
    let str = `Tempreture from celsius to Fahrenheit: ${ (num * 9/5 + 32).toFixed(2) }`
    return str 
}

//Click logic
submit.addEventListener( 'click', () => {
    const descParagraph = document.querySelector('.desc-paragraph');

    if (descParagraph) {
        descParagraph.textContent = "";
    }
    
    let num = userInput.value

    let lengthStr = lengthCalc(num)
    let tempStr = tempCalc(num)
    let volStr = volCalc(num)
    let massStr = massCalc(num)

    updateParagraph(lengthStr, lengthDiv)
    updateParagraph(tempStr, tempDiv)
    updateParagraph(volStr, volumeDiv)
    updateParagraph(massStr, massDiv)

    userInput.value = ""
})



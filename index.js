// 📏 LENGTH / DISTANCE
// 1. Centimeters to Inches
// Formula:
// inches = centimeters × 0.3937
// Example:
// 10 cm × 0.3937 = 3.937 in

// 2. Meters to Feet and Yards
// Formula:

// feet = meters × 3.2808

// yards = meters × 1.0936
// Example:
// 2 m × 3.2808 = 6.5616 ft
// 2 m × 1.0936 = 2.1872 yd

// 3. Kilometers to Miles
// Formula:
// miles = kilometers × 0.6214
// Example:
// 5 km × 0.6214 = 3.107 mi

// ⚖️ WEIGHT / MASS
// 4. Grams to Ounces
// Formula:
// ounces = grams × 0.0353
// Example:
// 200 g × 0.0353 = 7.06 oz

// 5. Kilograms to Pounds
// Formula:
// pounds = kilograms × 2.2046
// Example:
// 3 kg × 2.2046 = 6.6138 lbs

// 🧪 VOLUME
// 6. Milliliters to Fluid Ounces (US)
// Formula:
// fl oz = milliliters × 0.0338
// Example:
// 250 ml × 0.0338 = 8.45 fl oz

// 7. Liters to Quarts and Gallons (US)
// Formula:

// quarts = liters × 1.0567

// gallons = liters × 0.2642
// Example:
// 1.5 L × 1.0567 = 1.585 qt
// 1.5 L × 0.2642 = 0.396 gal

// 🌡️ TEMPERATURE
// 8. Celsius to Fahrenheit
// Formula:
// °F = (°C × 9/5) + 32
// Examples:

// 0°C × 9/5 + 32 = 32°F

// 25°C × 9/5 + 32 = 77°F

const lengthDiv = document.getElementById('length-div')
const volumeDiv = document.getElementById('volume-div')
const massDiv = document.getElementById('mass-div')
const tempDiv = document.getElementById('temp-div')
const userInput = document.getElementById('user-input')
const submit = document.getElementById('submit')

const calc = {
    toInches : (num) => {
        return num *  0.3937
    },

    toFeet : (num) => {
        return num * 3.2808
    },
     
    toYards : (num) => {
        return num * 1.0936
    },

    toMiles : (num) => {
        return num * 1.0936 },

}


// paragrapgh Logic
function updateParagraph ( displayStr, div) {
    let el = document.createElement('p');
    el.textContent = displayStr
    div.append(el)
}

//Click logic
submit.addEventListener( 'click', () => {
    let num = userInput.value
    let str = `The input Is ${num}`
    updateParagraph(str, lengthDiv)
    console.log(lengthDiv)
    userInput.value = ""
})



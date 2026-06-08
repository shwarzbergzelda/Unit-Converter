const convertBtn = document.getElementById('convert-btn')
const numberInput = document.getElementById('number-input')
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')

convertBtn.addEventListener('click', () => {
    if (numberInput.value === "") {
        alert('Please enter a number')
        return
    }

    const numberToConvert = Number(numberInput.value)

    // convert length between meters and feet
    const feet = (numberToConvert * 3.28084).toFixed(3)
    const meters = (numberToConvert / 3.28084).toFixed(3)

    length.textContent = `${numberToConvert} meters = ${feet} feet | ${numberToConvert} feet = ${meters} meters`


    // convert volume between liters and gallons
    const gallons = (numberToConvert * 0.264172).toFixed(3)
    const liters = (numberToConvert / 0.264172).toFixed(3)

    volume.textContent = `${numberToConvert} liters = ${gallons} gallons | ${numberToConvert} gallons = ${liters} liters`


    // convert mass between kilograms and pounds
    const pounds = (numberToConvert * 2.20462).toFixed(3)
    const kilograms = (numberToConvert / 2.20462).toFixed(3)

    mass.textContent = `${numberToConvert} kilograms = ${pounds} pounds | ${numberToConvert} pounds = ${kilograms} kilograms`

    numberInput.value = ""
})
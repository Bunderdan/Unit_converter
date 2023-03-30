/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("btn")
const lengthOut = document.getElementById("length")
const volumeOut = document.getElementById("volume")
const massOut = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    let num = inputEl.value
    lengthOut.textContent = length(num)
    volumeOut.textContent = volume(num)
    massOut.textContent = mass(num)    
})

function length(i) {
    const MtI = Number(i * 3.281).toFixed(2) //Ft
    const ItM = Number(i * 0.3048).toFixed(2) //M
    const result = `${i} meters = ${MtI} feet | ${i} feet = ${ItM} meters`
    return result
}

function volume(i) {
    const MtI = Number(i * 0.264).toFixed(2) //Ga
    const ItM = Number(i * 3.785).toFixed(2) //Li
    const result = `${i} liters = ${MtI} galons | ${i} galons = ${ItM} liters`
    return result
}

function mass(i) {
    const MtI = Number(i * 2.205).toFixed(2) //lb
    const ItM = Number(i * 0.454).toFixed(2) //kg
    const result = `${i} kilograms = ${MtI} pounds | ${i} pounds = ${ItM} kilograms`
    return result
}



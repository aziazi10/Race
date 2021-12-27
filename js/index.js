var elForm = document.querySelector(".form")
var elInput = elForm.querySelector (".input")

var elPiyoda = document.querySelector(".piyoda")
var elVelik = document.querySelector(".velik")
var elMashina = document.querySelector(".mashina")
var elSamolyot = document.querySelector(".samolyot")

var elPiyoda = 3.6
var elVelik = 20.1
var elMashina = 70
var elSamolyot = 800

var elResult = document.querySelector(".result")
var elResultv = document.querySelector (".resultv")
var elResultm = document.querySelector (".resultm")
var elResults = document.querySelector (".results")

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    var result = Number (elInput.value) / Number (elPiyoda)
    var resultv = Number (elInput.value) / Number (elVelik)
    var resultm = Number (elInput.value) / Number (elMashina)
    var results = Number (elInput.value) / Number (elSamolyot)

    elResult.textContent = result.toFixed(2)
    elResultv.textContent = resultv.toFixed(2)
    elResultm.textContent = resultm.toFixed(2)
    elResults.textContent = results.toFixed(2)
})


// Piyoda - 3.6 km/soat
// Velosiped - 20.1 km/soat
// Mashina - 70 km/soat
// Samolyot - 800 km/soat
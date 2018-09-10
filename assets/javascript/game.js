
$(document).ready(function() {
    var wins = 0
    var losses = 0
    var comNumber = Math.floor(Math.random() * 120) + 19
    var currentTotal = 0
    var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    var winsText = document.getElementById("wins")
    var lossesText = document.getElementById("losses")
    var comNumberText = document.getElementById("comNumber")
    var totalText = document.getElementById("current-total")
    var congratsText = document.getElementById("congrats-text")

    winsText.textContent = wins
    lossesText.textContent = losses
    comNumberText.textContent = comNumber
    totalText.textContent = currentTotal
    
    
    // function that need to be run everytime user wins or loses.
    function newGame(){
        comNumber = Math.floor(Math.random() * 120) + 19
        currentTotal = 0
        comNumberText.textContent = comNumber
        totalText.textContent = currentTotal

        // assigns a random value from crystalNumbers array to each crystal button
        $(".crystalButton").each(function(){
            var randomValue = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)]
            $(this).attr("value", randomValue)
        })

    }
    //adds value of clicked crystal button to users total score
    $(".crystalButton").on('click', function(){
        var valueString = ''
        //sets value string of clicked crystal equal to this variable
        valueString = $(this).attr("value")
        //takes said string and turns it into a number
        valueString = parseInt(valueString)
        //adds valueString (now a number) to users total then updates text on page
        currentTotal = currentTotal + valueString
        totalText.textContent = currentTotal
        //checks if user won or lost with each click of a crystal
        if(currentTotal === comNumber){
            wins++
            winsText.textContent = wins
            congratsText.textContent = ("You won!!")
            newGame()
        }else if(currentTotal > comNumber){
            losses++
            lossesText.textContent = losses
            congratsText.textContent = ("You lose!!")
            newGame()
        }
    })

    newGame()
})





$(document).ready(function() {
    var wins = 0
    var losses = 0
    var comNumber = Math.floor(Math.random() * 120) + 19
    var currentTotal = 0
    var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    $('#wins').text(wins)
    $('#losses').text(losses)
    $('#comNumber').text(comNumber)
    $('#current-total').text(currentTotal)
    
    // function that need to be run everytime user wins or loses.
    function newGame(){
        comNumber = Math.floor(Math.random() * 120) + 19
        currentTotal = 0
        $('#comNumber').text(comNumber)
        $('#current-total').text(currentTotal)

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
        $('#current-total').text(currentTotal)
        //checks if user won or lost with each click of a crystal
        if(currentTotal === comNumber){
            wins++
            $('#wins').text(wins)
            $('#congrats-text').text('You Won!!!')
            newGame()
        }else if(currentTotal > comNumber){
            losses++
            $('#losses').text(losses)
            $('#congrats-text').text('You Lose!!!')
            newGame()
        }
    })

    newGame()
})




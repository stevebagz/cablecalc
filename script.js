
function calculate() {
    let wireSelection = document.getElementById("wireSize").value;
    let cableLength = document.getElementById("wireLength").value;
    let rg6LowLossPer100 = 2.83;
    let rg6HighLossPer100 = 7.31;
    let rg11LowLossPer100 = 1.49;
    let rg11HighLossPer100 = 3.85;
    let answerLow = null;
    let answerHigh = null;
    let inputLow = document.getElementById("lowFreq").value;
    let inputHigh = document.getElementById("hiFreq").value;

    if (wireSelection === "RG6") {
        answerLow = ((cableLength/100) * rg6LowLossPer100);
        answerHigh = ((cableLength/100) * rg6HighLossPer100);
        
        document.getElementById("answerText").innerText = `Loss on Ch.98 (111MHz) - ${answerLow}
        Loss on Ch.110 (741MHz) - ${answerHigh}
        Ch. 98 (111MHz) Level at tap is ${inputLow}, level at end of drop should be ${inputLow - answerLow}
        Ch. 110 (741MHz) Level at tap is ${inputHigh}, level at end of drop should be ${inputHigh - answerHigh}`
    }
    else {
        answerLow = ((cableLength/100) * rg11LowLossPer100);
        answerHigh = ((cableLength/100) * rg11HighLossPer100);
        
        document.getElementById("answerText").innerText = `Loss on Ch.98 (111MHz) - ${answerLow}
        Loss on Ch.110 (741MHz) - ${answerHigh}
        Ch. 98 (111MHz) Level at tap is ${inputLow}, level at end of drop should be ${inputLow - answerLow}
        Ch. 110 (741MHz) Level at tap is ${inputHigh}, level at end of drop should be ${inputHigh - answerHigh}`
    }
}

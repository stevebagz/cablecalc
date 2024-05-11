
function calculate() {
    let wireSelection = document.getElementById("wireSize").value;
    let cableLength = document.getElementById("wireLength").value;
    let rg6LowLossPer100 = 2.3;
    let rg6HighLossPer100 = 5.65;
    let rg11LowLossPer100 = 1.35;
    let rg11HighLossPer100 = 3.65;
    let answerLow = null;
    let answerHigh = null;
    let inputLow = document.getElementById("lowFreq").value;
    let inputHigh = document.getElementById("hiFreq").value;

    if (wireSelection === "RG6") {
        answerLow = Math.round(((cableLength/100) * rg6LowLossPer100) * 10) /10;
        answerHigh = Math.round(((cableLength/100) * rg6HighLossPer100) * 10) /10;
        answerLow = answerLow.toFixed(1);
        answerHigh = answerHigh.toFixed(1);
        let approxSignalLow = (inputLow - answerLow).toFixed(1);
        let approxSignalHigh = (inputHigh - answerHigh).toFixed(1);
    

        
        document.getElementById("answerText").innerText = `Ch. 98 / Ch. 110 should read approx. ${approxSignalLow} / ${approxSignalHigh} 
        Loss on Ch.98 (111MHz) - ${answerLow} dBmV
        Loss on Ch.110 (741MHz) - ${answerHigh} dBmV`
    }
    else {
        answerLow = Math.round(((cableLength/100) * rg11LowLossPer100) * 10) /10;
        answerHigh = Math.round(((cableLength/100) * rg11HighLossPer100) * 10) /10;
        answerLow = answerLow.toFixed(1);
        answerHigh = answerHigh.toFixed(1);
        let approxSignalLow = (inputLow - answerLow).toFixed(1);
        let approxSignalHigh = (inputHigh - answerHigh).toFixed(1);
    
        
        document.getElementById("answerText").innerText = `Ch. 98 / Ch. 110 should read approx. ${approxSignalLow} / ${approxSignalHigh} 
        Loss on Ch.98 (111MHz) - ${answerLow} dBmV
        Loss on Ch.110 (741MHz) - ${answerHigh} dBmV`
    }
}

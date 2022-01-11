function calculateAddFuelAmount(){

    var inputEntryAmount = document.getElementById("input-entryAmount");
    var inputFuelPrice = document.getElementById("input-fuelPrice");
    var inputFuelAmount = document.getElementById("input-fuelAmount");

    if( checkInputComplete(inputEntryAmount,inputFuelPrice,inputFuelAmount) ){
        
        var LitreParYEN = 1 / inputFuelPrice.valueAsNumber;
        var primalPayAmount = Math.round(inputFuelPrice.valueAsNumber * inputFuelAmount.valueAsNumber);
        var divisionPitch = ['5','50','500','5000'];
        var priceDiff = [];
        var priceNewTarget = [];
        var fuelNewTarget = [];

        var resultList = document.getElementById("result-list");
        // Table Header
        
        var row = resultList.insertRow();
        row.insertCell().textContent = "No.";
        row.insertCell().textContent = "Target Fuel Amount";
        row.insertCell().textContent = "diff.";
        row.insertCell().textContent = "Price";
        row.insertCell().textContent = "Changes";
        

        for(var i = 0 ; i < divisionPitch.length ; i++){
            priceDiff[i] = divisionPitch[i] - (primalPayAmount % divisionPitch[i]);
            priceNewTarget[i] = primalPayAmount + priceDiff[i];
            fuelNewTarget[i] = round_SpecifiedDigitsPosition(priceNewTarget[i] * LitreParYEN , 2);

            var row = resultList.insertRow();
            row.insertCell().textContent = i + 1;
            row.insertCell().textContent = fuelNewTarget[i];
            row.insertCell().textContent = round_SpecifiedDigitsPosition(fuelNewTarget[i] - inputFuelAmount.valueAsNumber , 2);
            row.insertCell().textContent = priceNewTarget[i];
            row.insertCell().textContent = inputEntryAmount.value - priceNewTarget[i];
            
        }

        resultList.classList.add("table-animation");

    }

}

function checkInputComplete(inputEntryAmount,inputFuelPrice,inputFuelAmount){

    var rtn_flag = false;

    if((inputEntryAmount.value != "") && (inputFuelPrice.value != "") && (inputFuelAmount.value != "")){
        rtn_flag = true;
    }

    return rtn_flag;

}

function round_SpecifiedDigitsPosition(value , position){
    //return Math.round(value / base) * base;
    var str_buff_multiply = "e+" + position;
    var str_buff_division = "e-" + position;
    return +(Math.round(value + str_buff_multiply ) + str_buff_division);
}

function resultPattern(){

}
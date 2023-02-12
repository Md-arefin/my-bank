document.getElementById("btn-withdraw").addEventListener("click", function () {
    // step 1 : 
    const withdrawFieldElement = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawFieldElement.value;
    const withdrawAmount = parseFloat(withdrawFieldString);

    withdrawFieldElement.value = "";

    if (isNaN(withdrawAmount)) {
        alert("Input correct number")
        return;
    }

    // step 2:

    const withdrawFieldPrevious = document.getElementById('withdraw-total')
    const withdrawFieldPreviousString = withdrawFieldPrevious.innerText;
    const withdrawPrevious = parseFloat(withdrawFieldPreviousString);

    const withdrawTotal = withdrawAmount + withdrawPrevious;
    withdrawFieldPrevious.innerText = withdrawTotal;

    //  step 3:

    const balanceField = document.getElementById("balance-total")
    const balanceFieldString = balanceField.innerText;
    const previousBalance = parseFloat(balanceFieldString);

    if(withdrawAmount > previousBalance ){
        alert("You don't that much money ")
        return;
    }

    // step 4:

    const totalBalance = previousBalance - withdrawAmount;
    balanceField.innerText = totalBalance;






})
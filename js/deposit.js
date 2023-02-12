document.getElementById('btn-deposit').addEventListener("click", function () {
    // step1: get deposit value form input field

    const depositField = document.getElementById("deposit-field")
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    //    step 2
    const depositFieldElement = document.getElementById('deposit-total')
    const depositFieldString = depositFieldElement.innerText;
    const depositTotal = parseFloat(depositFieldString);

    depositField.value = "";

    if (isNaN(depositAmount)) {
        alert("Please input number ")
        return
    }
    const totalDeposit = depositAmount + depositTotal;

    depositFieldElement.innerText = totalDeposit;

    const balanceTotalElement = document.getElementById("balance-total")

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + depositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;



})
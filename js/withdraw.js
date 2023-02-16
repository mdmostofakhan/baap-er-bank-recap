
// step - 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
   
    // step -2
    const withdrawElement = document.getElementById('withdraw-field');
    const previousWithdrawFieldString = withdrawElement.value;
    const newWithdrawTotalAmount = parseFloat(previousWithdrawFieldString);

    // step - 3
    withdrawElement.value = '';

    // step - 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step - 5
    const withdrawTotalAmount = previousWithdrawTotal + newWithdrawTotalAmount;
    withdrawTotalElement.innerText = withdrawTotalAmount;

    //step - 6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step - 7
    const newBlanceAmount = previousBalanceTotal - newWithdrawTotalAmount;
    balanceElement.innerText = newBlanceAmount;
})
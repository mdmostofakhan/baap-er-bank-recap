/*
1. add event listener to the deposit button
2. get deposit amount frim the deposit input field
2.5 convert striong deposit amount to a nmver type

3.clear the deposit input field after getting the value

4. get the previous deposit total

5. calculate new deposit total and set thae value to the deposit

6. get the current balance

7. culculate the new balance and set it to the balance total element  
*/

    // Step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
     
    // step - 2 
    const depositField = document.getElementById('doposit-field');
    const depositFieldAmountString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldAmountString);

    // step - 3  
    depositField.value = '';

    // step -4
    const depositTotalElement= document.getElementById('doposte-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step - 5
    const newDepositTAmount = previousDepositTotal + depositFieldAmount;
    depositTotalElement.innerText = newDepositTAmount;

    // step - 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalAmoutnStrong = balanceTotalElement.innerText;
    const previousBalanceTotalAmoutn = parseFloat(previousBalanceTotalAmoutnStrong);

    // step - 7
    const balanceTotalAmount = previousBalanceTotalAmoutn + depositFieldAmount;
    balanceTotalElement.innerText = balanceTotalAmount;

})
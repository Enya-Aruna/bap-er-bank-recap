//step-1
document.getElementById('btn-withdraw').addEventListener('click' ,function(){

    // step-2
    const withdrawFeild = document.getElementById('withdraw-feild');
    const getWithdrawBalanceString = withdrawFeild.value ; 
    const getWithdrawBalance = parseFloat(getWithdrawBalanceString);

    //step-3
     withdrawFeild.value = '' ;
     //step-4

     const withdrawElement = document.getElementById('Withdraw-total');
     const newWithdrawBalanceString = withdrawElement.innerText ;
     const newWithdrawBalance = parseFloat(newWithdrawBalanceString)
    //  step-5
    const currentWithdrawAmmount = getWithdrawBalance + newWithdrawBalance ;
    withdrawElement.innerText = currentWithdrawAmmount ;
    // step-6 
    const balanceElement = document.getElementById('balance-total');
    const newBalanceElementString = balanceElement.innerText ;
    const newBalanceElement = parseFloat(newBalanceElementString) ;

    // step-7
    const currentBalance = newBalanceElement + currentWithdrawAmmount ;
    balanceElement.innerText = currentBalance ;

    
})
//step--1:
document.getElementById('btn-deposit').addEventListener('click' , function(){
    // step--2
const depositFeild = document.getElementById('deposit-feild');
const newDepositAmmountString = depositFeild.value ;
const newDepositAmmount = parseFloat(newDepositAmmountString);
// step--3 :
depositFeild.value = ''
// step--4 :
const  depositElement = document.getElementById('deposit-total') ;
const newDepositElementString = depositElement.innerText ;
const newDepositElement = parseFloat(newDepositElementString)
// step--5 :
const currentDepositAmmount = newDepositAmmount + newDepositElement ;
depositElement.innerText = currentDepositAmmount ;
//step--6 :
const balanceElement = document.getElementById('balance-total');
const newBalanceElementString = balanceElement.innerText ;
const newBalanceElement = parseFloat(newBalanceElementString) ;
//step--7:
const currentBalance = newBalanceElement + currentDepositAmmount ;
balanceElement.innerText = currentBalance ;
})
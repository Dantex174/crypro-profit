"use strict"
    document.onkeypress = function (event) {
        if (event.code=='Enter') {
            f1();
        }
    }  
    function f1 (){
    let price, price2, profit = 0;
    let x1=0, x2=0;

    price = parseFloat(document.getElementById('price').value);
    x1 = parseFloat(document.getElementById('x1').value);
    x2 = parseFloat(document.getElementById('x2').value);
        if (x1!=x1||x2!=x2){
            x1=0;
            x2=0;
            alert('Введите цену');
            return 0;
        }

    price2 = (price/x1)*x2;
    price2 = Math.round(price2*100)/100;
        
    profit = Math.round((price2 - price)*100)/100 ; 
    
    document.getElementById('out').innerHTML = price2;
    document.getElementById('profit').innerHTML = profit;  
}
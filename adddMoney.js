document.getElementById("add-money").addEventListener('click',function(event){
    event.preventDefault()
    const amount = document.getElementById('amount').value;
    const convartamaount = parseInt(amount);
    const pin = document.getElementById('addPin').value;
    const convertPin = parseInt(pin);
    const mainAmount = document.getElementById('mainAmount').innerText
    const convertMaintAmount = parseFloat(mainAmount);
    if(convertPin === 1234){
        const sum = convartamaount + convertMaintAmount
       document.getElementById('mainAmount').innerText = sum;

       
    }else{
        alert('pin thik koro ')
    }
    
   
})
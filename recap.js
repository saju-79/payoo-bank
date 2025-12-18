document.getElementById("add-money").addEventListener('click',function(event){
    event.preventDefault()
    const amount = document.getElementById('amount').value;
    const convertAmount  = parseFloat(amount)
    const pin = document.getElementById('addPin').value;
    const convertPin = parseInt(pin);
    const mainAmount = document.getElementById('mainAmount').innerText
    const convertMaintAmount = parseFloat(mainAmount);
    if(convertAmount && convertPin){
        if(convertPin === 1234){
            const sum = convertMaintAmount + convertAmount;
            document.getElementById('mainAmount').innerText =sum

        }else{
            alert('enter valid PIN')
        }
       
    }else{
        alert('enter amount')
    }
    
   
})
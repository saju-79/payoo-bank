document.getElementById("cash-out").addEventListener('click',function(event){
    console.log('asiiii')
    event.preventDefault()
    const amount = document.getElementById('out-amount').value;
    const outconvertAmount  = parseFloat(amount)
    const pin = document.getElementById('outPin').value;
    const outconvertPin = parseInt(pin);
    const mainAmount = document.getElementById('mainAmount').innerText
    const outconvertMaintAmount = parseFloat(mainAmount);
    if(outconvertAmount && outconvertPin){
        if(outconvertPin === 1234 && outconvertAmount){
            const outsum = outconvertMaintAmount - outconvertAmount;
           if(outsum >= 0){
             document.getElementById('mainAmount').innerText =outsum;
           }else{
             alert(` avaiable blance ${mainAmount}$`)
           }

        }else{ 
            alert('enter valid PIN')
        }
       
    } else{
        alert('enter amount')
}
    
   
})
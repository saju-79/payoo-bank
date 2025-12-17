document.getElementById("login-btn").addEventListener('click' ,function(event){
    event.preventDefault()
    const number  = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;
    const convartpin =parseInt(pin);
    console.log(typeof convartpin)
    if(number.length === 11){
        
       if( convartpin === 1234){
           
           window.location.href = "./main.html"
        }
        else{
            alert('pin thik naii ')
        }
    }
    else(
        alert('place correct number ')
    )
    console.log(number , pin) 
})
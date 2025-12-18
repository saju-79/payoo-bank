document.getElementById('out').addEventListener('click', function(){
    document.getElementById("cash-out").style.display = "block"
    document.getElementById("add-money").style.display = "none"
})
document.getElementById('add').addEventListener('click', function(){
    document.getElementById("cash-out").style.display = "none"
    document.getElementById("add-money").style.display = "block"
})
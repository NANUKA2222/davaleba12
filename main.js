const brg = document.getElementById("lines");
const brg1 = document.querySelector('.burgermenu'); 

brg.addEventListener('click', function() {
    brg1.classList.toggle('active'); 
});
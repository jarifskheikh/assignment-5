const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function(e) {
        count = count + 1;
        document.getElementById("cart-count").innerText = count;
    })
}



function colorChange () {

}
function mathPart () {
    const 
}
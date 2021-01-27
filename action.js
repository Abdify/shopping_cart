const phonePrice = 1219;
const casingPrice = 59;


let cart = document.querySelector("#cart");
cart.addEventListener("click", function(event){
    //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
    if(event.target.className === "btn btn-default incrementBtn" || event.target.parentNode.className === "btn btn-default incrementBtn"){
        let id = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(id === "") id = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        console.log(id)
        updateNumber("#"+id, 1);
        id === "iPhone11"? updatePrice("#"+id, 1, phonePrice): updatePrice("#"+id, 1, casingPrice);
    }
    if(event.target.className === "btn btn-default decrementBtn" || event.target.parentNode.className === "btn btn-default decrementBtn"){
        let id = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(id === "") id = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        updateNumber("#"+id, -1);
        console.log(id)
        id === "iPhone11"? updatePrice("#"+id, -1, phonePrice): updatePrice("#"+id, -1, casingPrice);
    }
})

// let phoneIncrementBtn = document.querySelector("#iPhone11 .incrementBtn");
// let phoneDecrementBtn = document.querySelector("#iPhone11 .decrementBtn");
// let casingIncrementBtn = document.querySelector("#casing .incrementBtn");
// let casingDecrementBtn = document.querySelector("#casing .decrementBtn");

// phoneIncrementBtn.addEventListener("click", function(){
//     updateNumber("#iPhone11", 1);
//     updatePrice("#iPhone11", 1, phonePrice);
// });
// phoneDecrementBtn.addEventListener("click", function(){
//     updateNumber("#iPhone11", -1);
//     updatePrice("#iPhone11", -1, phonePrice);
// });
// casingIncrementBtn.addEventListener("click", function(){
//     updateNumber("#casing", 1);
//     updatePrice("#casing", 1, casingPrice);
// });
// casingDecrementBtn.addEventListener("click", function(){
//     updateNumber("#casing", -1);
//     updatePrice("#casing", -1, casingPrice);
// });



function updateNumber(productId, symbol){   
    let numberOfItem = document.querySelector(productId + " .numberOfProduct");
    let newNumberOfItem = Number(numberOfItem.value) + Math.sign(symbol)*1;
    numberOfItem.value = newNumberOfItem;
}
function updatePrice(productId, symbol, productPrice){
    let price = document.querySelector(productId + " .productPrice");
    newPrice = Number(price.innerText) + Math.sign(symbol)*productPrice;
    price.innerText = newPrice;

    updateTotal(symbol, productPrice);
}

function updateTotal(symbol, productPrice){
    //update subtotal
    let subTotal = document.getElementById("subTotal");
    newSubTotal = Number(subTotal.innerText) + Math.sign(symbol)*productPrice;
    subTotal.innerText = newSubTotal;
    //update total
    let total = document.getElementById("total");
    let tax = document.getElementById("tax");
    newTotal = Math.sign(symbol) === 1 ? Number(tax.innerText) + newSubTotal: Number(total.innerText) - productPrice;
    total.innerText = newTotal;
}
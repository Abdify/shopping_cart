
let products = document.querySelectorAll(".cart-item");
let removeButton = document.querySelectorAll(".remove-item");
let incrementBtn = document.querySelectorAll(".incrementBtn");
let decrementBtn = document.querySelectorAll(".decrementBtn");

for(let i=0;i<products.length;i++){
    removeButton[i].addEventListener("click", function(){
        products[i].remove();
    });
    incrementBtn[i].addEventListener("click", function(){
        updateNumber("#"+products[i].id, 1);
    });
    decrementBtn[i].addEventListener("click", function(){
        updateNumber("#"+products[i].id, -1);
    });

}




// let cart = document.querySelector("#cart");
// cart.addEventListener("click", function(event){
//     if(event.target.className === "remove-item"){
//         event.target.parentNode.parentNode.parentNode.remove();
//     }


//     //console.log(event.target.parentNode.parentNode.parentNode.id);
//     if(event.target.className === "btn btn-default incrementBtn" || event.target.parentNode.className === "btn btn-default incrementBtn"){
//         let id = event.target.parentNode.parentNode.parentNode.parentNode.id;
//         if(id === "") id = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
//         console.log(id)
//         updateNumber("#"+id, 1);
//     }
//     if(event.target.className === "btn btn-default decrementBtn" || event.target.parentNode.className === "btn btn-default decrementBtn"){
//         let id = event.target.parentNode.parentNode.parentNode.parentNode.id;
//         if(id === "") id = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
//         updateNumber("#"+id, -1);
//     }
// })




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
    if(newNumberOfItem < 0){
        alert("!!");
        return;
    }
    numberOfItem.value = newNumberOfItem;

    updatePrice(productId, symbol);
}
function updatePrice(productId, symbol){
    let price = document.querySelector(productId + " .productPrice");
    let basePrice = Number(document.querySelector(productId + " .basePrice").innerText);
    newPrice = Number(price.innerText) + Math.sign(symbol)*basePrice;
    price.innerText = newPrice;

    updateTotal(symbol, basePrice);
}

function updateTotal(symbol, basePrice){
    //update subtotal
    let subTotal = document.getElementById("subTotal");
    newSubTotal = Number(subTotal.innerText) + Math.sign(symbol)*basePrice;
    subTotal.innerText = newSubTotal;
    //update total
    let total = document.getElementById("total");
    let tax = document.getElementById("tax");
    newTotal = Math.sign(symbol) === 1 ? Number(tax.innerText) + newSubTotal: Number(total.innerText) - basePrice;
    total.innerText = newTotal;
}
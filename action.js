let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");

incrementBtn.addEventListener("click", function(){
    updateNumber("numberOfPhone", 1);
    updatePhonePrice("phonePrice", 1);
});
decrementBtn.addEventListener("click", function(){
    updateNumber("numberOfPhone", -1);
    updatePhonePrice("phonePrice", -1);
});

function updateNumber(id, symbol){   
    let numberOfItem = document.getElementById(id);
    let newNumberOfItem = Number(numberOfItem.value) + Math.sign(symbol)*1;
    numberOfItem.value = newNumberOfItem;
}
function updatePhonePrice(id, symbol){
    //update product price
    let price = document.getElementById(id);
    newPrice = Number(price.innerText) + Math.sign(symbol)*1219;
    price.innerText = newPrice;

    updateTotal(symbol);
}

function updateTotal(symbol){
    //update subtotal
    let subTotal = document.getElementById("subTotal");
    newSubTotal = Number(subTotal.innerText) + Math.sign(symbol)*1219;
    subTotal.innerText = newSubTotal;
    //update total
    let total = document.getElementById("total");
    let tax = document.getElementById("tax");
    newTotal = Math.sign(symbol) === 1 ? Number(tax.innerText) + newSubTotal: Number(total.innerText) - 1219;
    total.innerText = newTotal;
}
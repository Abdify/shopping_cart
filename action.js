let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function(){
    incrementNumber("numberOfPhone");
    updatePrice("phonePrice");
});

function incrementNumber(id){   
    let numberOfItem = document.getElementById(id);
    let newNumberOfItem = Number(numberOfItem.value) + 1;
    numberOfItem.value = newNumberOfItem;
}
function updatePrice(id){
    let price = document.getElementById(id);
    newPrice = Number(price.innerText) + 1219;
    price.innerText = newPrice;
}
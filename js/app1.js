// prepare data
let productNumber;
let productAmount;
let price;
const discount = 0.2;
const discountStartsFrom = 10000;
let finalPrice;

// show all products with prices
function showProducts() {
    for (let i = 0; i < products.length; i++) {
      console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
  }
// +2) show prompt with request to enter product number (validation)
function enterProductNumber() {
    do {
        productNumber = parseInt(prompt('Enter product number'));
      } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));  
}

// show prompt with request to enter product amount (validation)
function enterProductAmount(){
    do {
        productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
      } while(productAmount < 1 || productAmount > products[productNumber -1].availability || isNaN(productAmount));
}
// calculate price
function calculatePrice(){
    price = products[productNumber -1].price*productAmount
}
// check if discount available
function  checkDiscount(){
    if (price >= discountStartsFrom){
        return true
    } else {
        return false
    }           
}
// if so - calculate discount
function calculateDiscount(){
    if (checkDiscount()){
        finalPrice = price - price * discount;
    } else {
        finalPrice = price
    }
}
// then show final price
function showFinalPrice(){
    alert(finalPrice)
}


  showProducts()
  enterProductNumber()
  enterProductAmount()
  calculatePrice()
  calculateDiscount()
  showFinalPrice()


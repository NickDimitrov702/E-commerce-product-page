// Functional Counter

let countPlus = document.getElementById('+btn')
let countMinus = document.getElementById('-btn')
let totalCount = document.getElementById('input-counter')

let cartIcon = document.getElementById('cart')
let addToCartButton = document.getElementById('add-to-cart-btn')
let cartItemQuantity = document.getElementById('cart-quantity-indicator')
let checkOutCart = document.getElementById('checkout')

checkOutCart.style.visibility = "hidden"
cartItemQuantity.style.visibility = "hidden"

let state = checkOutCart.style.visibility = "hidden"

let counter = 0;

let stateVisible = checkOutCart.style.visibility = "visible";
let stateHidden = checkOutCart.style.visibility = "hidden";

let checkOutImgItem = document.getElementById('check-out-image')
let itemName = document.getElementsByClassName('check-out-item-name')
let itemPrice = document.getElementById('item-price')
let itemQuantity = document.getElementById('item-quantity')
let itemTotalPrice = document.getElementById('item-total-price')

let checkOutMessege = document.getElementById('empty-cart-messege')
let checkOutBtn = document.getElementById('check-out-btn')
let checkOutBody =  document.getElementById('check-out-cart-item-body')
let checkOutItem = document.getElementById('check-out-item-wrapper')
checkOutItem.parentNode.removeChild(checkOutItem)
checkOutBtn.parentNode.removeChild(checkOutBtn)
// checkOutBody.style.visibility = 'visible'
let thumbNailImage = document.getElementById('img-slider')

updateDispaly()

countPlus.addEventListener('click', () => {
    counter++;
    updateDispaly()


    addToCartButton.addEventListener('click', () => {

        
        

        if (counter > 0) {
            
            let totalPrice = 0;
            let splitItemPrice = itemPrice.innerHTML
            let thePriceSplit = splitItemPrice.split("$")
            let itemPriceInt = parseInt(thePriceSplit[1])
            cartItemQuantity.value = counter;
            cartItemQuantity.style.visibility = 'visible'
            itemQuantity.innerHTML = counter
            totalPrice = counter * itemPriceInt
            itemTotalPrice.innerHTML = `$${totalPrice.toFixed(2)}`

            checkOutMessege.style.display = "none"
            
            checkOutBody.appendChild(checkOutItem)
            checkOutBody.appendChild(checkOutBtn)
            let deleteBtn = document.getElementById('delete');
            

            deleteBtn.addEventListener('click', () => {
                checkOutItem.parentNode.removeChild(checkOutItem)
                checkOutBtn.parentNode.removeChild(checkOutBtn)
                checkOutMessege.style.display = ""
                cartItemQuantity.style.visibility ="hidden"
            })
            
        }

        


    })

})

countMinus.addEventListener('click', () => {

    if (counter > 0) {
        counter -= 1;
    }

    updateDispaly()
})

function updateDispaly() {
    totalCount.value = counter
}

function cartShower() {
    state = checkOutCart.style.visibility = "visible"
}

function cartHider() {
    state = checkOutCart.style.visibility = "hidden"
}

function toogleCart() {
    if (state === stateHidden) {
        checkOutCart.style.visibility = "visible";
        cartShower()
    } else {
        checkOutCart.style.visibility = "hidden"
        cartHider()
    }
}

function itemSelect() {

}

thumbNailImage.addEventListener('click', (e) => {
    e.preventDefault()
    let slides = document.querySelectorAll('img-slider')
    console.log(slides)
    console.log(slides)

    console.log(e.type)
    if(e.type === 'click') {
        e.path[0].style = 'border: 3px solid orange; background-color: orange'
    } 



})

// function changeStlye(e) {
//     let divColorChange = document.getElementsByClassName('img-slider-items')
//     divColorChange[0].style = 'border: 1px solid orange'
// }







// Functional Counter

let countPlus = document.getElementById('+btn')
let countMinus = document.getElementById('-btn')
let totalCount = document.getElementById('input-counter')
let counter = 0;

updateDispaly()

countPlus.addEventListener('click', () => {
    counter++;
    updateDispaly()
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

// Add to Cart Button




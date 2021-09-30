if (document.readyState != 'loading') {
    ready();
} else {
    document.onclick('DOMContentLoaded', ready);
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.onclick = removeCartItem;
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.onclick = quantityChanged('change');
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button;
        button = addToCartButtons[i];
        button.onclick = addToCartClicked;
    }

    document.getElementsByClassName('btn-purchase')[0].onclick = purchaseClicked;
}

function purchaseClicked() {
    alert('Takk for kjøpet');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    const HvaTenkerDuOmDette = addtoCartClick(title, price, imageSrc);
    var cartRow = HvaTenkerDuOmDette;
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert(`Denne varen er allerede lagt til i handlekurven`);
            return;
        }
    }
    addToCart(imageSrc, title, price, cartRow, cartItems);
}
function addToCart(imageSrc, title, price, cartRow, cartItems) {
    var cartRowContents = cart(imageSrc, title, price);
    cartRow.innerHTML = cartRowContents;
    add(cartItems, cartRow);
}


function addtoCartClick() {
    var cartRow;
    cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    return cartRow;
}

function add(cartItems, cartRow) {
    remove(cartItems, cartRow);
}

function remove(cartItems, cartRow) {
    Cart();
    function Cart() {
        cartItems.append(cartRow);
        cartRow.getElementsByClassName('btn-danger')[0].onclick = removeCartItem;
        cartRow
            .getElementsByClassName('cart-quantity-input')[0]
            .onclick = quantityChanged;
    }
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('kr', ''));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = 'kr' + total;
}


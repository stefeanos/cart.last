for (let product of products.product) {
    let html = "";
    app.innerHTML = html += `
   <section class="container content-section">
    <h2 class="section-header"></h2>
    <div class="shop-items">
        <div class="shop-item">
            <div class="p-item">
                <div class="shop-item-title">${product.name}</div>
                <img class="shop-item-image" src="images/${product.img}">
                <div class="p-desc">
                    <font style="vertical-align: inherit;">
                        <div style="vertical-align: inherit;">${product.desc}</div>
                    </font>
                </div>
                <div class="shop-item-details">
                    <div class="shop-item-price">${product.price} kr </div>
                    <button class="btn btn-primary shop-item-button" type="button">Legg i handlevogn</button>

                </div>
            </div>

        </div>
    </div>
    </section>
    `;
}


let html = "";
app.innerHTML += html +=
    ` <div class="p-item">
    <h1 class="band-name band-name-large">Dansken og Meg</h1>
    </header>
    <div id="cart-items">
        <section class="container content-section">
            <h2 class="section-header">CART</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">0</span>
            </div>
            <button onclick="purchaseClicked" class="btn btn-primary btn-purchase" type="button">KJØP</button>

             `;


function cart(imageSrc, title, price) {
    let html = '';
    html = `
        <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <div class="cart-price cart-column">${price}</div>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
        
        `;
    return html;
}


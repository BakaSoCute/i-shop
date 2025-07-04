
const cart = [];

function addToCart(name, price) {
    const item = {
        name: name,
        price: price,
        quantity: 1
    };

    const existingItem = cart.find(product.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    renderCart();
}

function renderCart () {
    const cartContainer = document.getElementById("cart");

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.quantity} шт. - ${item.price * item.quantity} руб.`;
        cartContainer.appendChild(li);
    })
}
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const clearCartButton = document.getElementById('clearCart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCart() {
        cartItemsList.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            nameCell.classList.add('product');
            row.appendChild(nameCell);

            const quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;
            quantityCell.classList.add('quantity');
            row.appendChild(quantityCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = `$${item.price.toFixed(2)}`;
            priceCell.classList.add('price');
            row.appendChild(priceCell);

            const totalCell = document.createElement('td');
            totalCell.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            totalCell.classList.add('total');
            row.appendChild(totalCell);

            cartItemsList.appendChild(row);

            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    clearCartButton.addEventListener('click', function () {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    });

    displayCart();
});

/*jslint browser: true */
/*global localStorage, document, alert */

// Cart functionality using localStorage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navigation
function updateCartCount() {
    "use strict";
    var cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add item to cart
function addToCart(id, name, price) {
    "use strict";
    var existingItem = cart.find(function (item) {
        return item.id === id;
    });
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: id, name: name, price: parseFloat(price), quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + ' added to cart!');
}

// Remove item from cart
function removeFromCart(id) {
    "use strict";
    cart = cart.filter(function (item) {
        return item.id !== id;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    // displayCart(); // Removed to avoid forward reference
}

// Display cart items
function displayCart() {
    "use strict";
    var cartItems, totalPrice, total, itemTotal, cartItem;
    cartItems = document.getElementById('cart-items');
    totalPrice = document.getElementById('total-price');
    if (!cartItems || !totalPrice) {
        return;
    }

    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(function (item) {
        itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = '<div><h4>' + item.name + '</h4><p>Price: $' + item.price.toFixed(2) + '</p><p>Quantity: ' + item.quantity + '</p><p>Subtotal: $' + itemTotal.toFixed(2) + '</p></div><button class="remove-from-cart" data-id="' + item.id + '">Remove</button>';
        cartItems.appendChild(cartItem);
    });

    totalPrice.textContent = total.toFixed(2);

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-from-cart').forEach(function (button) {
        button.addEventListener('click', function (e) {
            var id = parseInt(e.target.getAttribute('data-id'), 10);
            removeFromCart(id);
        });
    });
}

// Event listeners for add to cart buttons
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    updateCartCount();

    document.querySelectorAll('.add-to-cart').forEach(function (button) {
        button.addEventListener('click', function (e) {
            var id, name, price;
            id = parseInt(e.target.getAttribute('data-id'), 10);
            name = e.target.getAttribute('data-name');
            price = e.target.getAttribute('data-price');
            addToCart(id, name, price);
        });
    });

    // Display cart if on cart page
    if (document.getElementById('cart-items')) {
        displayCart();
    }

    // Checkout functionality (placeholder)
    var checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                alert('Checkout functionality would be implemented here!');
            }
        });
    }
});

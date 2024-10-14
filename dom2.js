document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('#total-price');

    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            total += price * quantity;
        });
        totalPriceElement.textContent = ` DT ${total.toFixed(2)}`;
    }

    cartItems.forEach(item => {
        const plusBtn = item.querySelector('.plus-btn');
        const minusBtn = item.querySelector('.minus-btn');
        const deleteBtn = item.querySelector('.delete-btn');
        const heartBtn = item.querySelector('.heart-btn');
        const quantityInput = item.querySelector('.quantity-input');

        // Handle the "+" button click
        plusBtn.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotal();
        });

        // Handle the "-" button click
        minusBtn.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 0) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotal();
            }
        });

        // Handle the delete button
        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        // Handle the heart button (like functionality)
        heartBtn.addEventListener('click', () => {
            heartBtn.classList.toggle('liked');
        });
    });

    // Update the total price on initial load (set it to $0)
    updateTotal();
});

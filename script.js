
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
// Sample script to add event listeners for "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
            // Here, you could add functionality to track cart items, update a cart icon, etc.
        });
    });
});// Add event listener to all "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            alert("Item added to cart!");
            // You can add functionality here to add the item to a cart array or display the cart contents.
        });
    });
});
// Add event listener to all "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            alert("Item added to cart!");
            // You can add functionality here to add the item to a cart array or display the cart contents.
        });
    });
});
<script>
    // Function to calculate the subtotal based on item quantities and prices
    function calculateSubtotal() {
        let subtotal = 0;
        const rows = document.querySelectorAll(".cart-items tbody tr");
        rows.forEach(row => {
            const quantity = row.querySelector("input[type='number']").value;
            const price = parseFloat(row.cells[2].textContent.replace("$", ""));
            const total = quantity * price;
            row.cells[3].textContent = `$${total.toFixed(2)}`;
            subtotal += total;
        });
        document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    }

    // Event listener for quantity input changes
    document.querySelectorAll(".cart-items input[type='number']").forEach(input => {
        input.addEventListener("input", calculateSubtotal);
    });

    // Event listener for remove buttons
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.closest("tr").remove();
            calculateSubtotal();
        });
    });

    // Initial calculation of subtotal
    calculateSubtotal();
</script>


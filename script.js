// Sample product data
const products = [
    { id: 1, name: 'Manchuriyan', price: 10.00, image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/08/veg-manchurian-1-500x427.jpeg' },
    { id: 2, name: 'Fride Rice', price: 15.00, image: 'https://www.onceuponachef.com/images/2023/12/Fried-Rice-Hero-12.jpg' },
    { id: 3, name: 'Chili Patato', price: 30.00, image: 'https://i.pinimg.com/736x/5d/bd/9a/5dbd9a2f5a44fe6a6edd933e2ccd4ed4.jpg' },
    { id: 4, name: 'Noodals', price: 10.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGviU_7q9YhD4bx6k2FoUb5L6IIrQ7EpKBw&s' }
  ];

const productList = document.getElementById('Menu-list');
const cartItems = document.getElementById('Treay-items');
const cartTotal = document.getElementById('Treay-total');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];

// Display products
function displayProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('Menu-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="Rs.{product.name}" width="100" height="100">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

// Checkout function
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    }
});

// Initialize the page
displayProducts();

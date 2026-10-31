// WhatsApp Number
// Replace this demo number with the shop owner's number.

const phone = "919876543210";

const shopType = document.body.dataset.shop;

const clothingProducts = [

    {
        name: "Men's Shirt",
        price: 599,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
    },

    {
        name: "Men's Jacket",
        price: 1299,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },

    {
        name: "Women's Dress",
        price: 999,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
    },

    {
        name: "Fashion T-Shirt",
        price: 399,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    }

];


const restaurantProducts = [

    {
        name: "Delicious Pizza",
        price: 249,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
    },

    {
        name: "Burger",
        price: 149,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },

    {
        name: "Pasta",
        price: 199,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500"
    },

    {
        name: "Delicious Cake",
        price: 299,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
    }

];


// Select Products

const products = shopType === "clothing"
    ? clothingProducts
    : restaurantProducts;


// Show Products

const productList = document.getElementById("product-list");

products.forEach(function(product) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

        <img src="${product.image}" alt="${product.name}">

        <div class="card-content">

            <h3>${product.name}</h3>

            <p class="price">₹${product.price}</p>

            <a
                class="order-btn"
                href="https://wa.me/${phone}?text=${encodeURIComponent("Hello, I want to order " + product.name + " for ₹" + product.price)}"
                target="_blank">

                ${shopType === "clothing" ? "Buy Now" : "Order Now"}

            </a>

        </div>

    `;

    productList.appendChild(card);

});


// Contact Button

const contactButton = document.getElementById("contact-btn");

contactButton.href =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent("Hello, I want to know more about your " + shopType + " business.");
var products = [
  {
    id: 1,
    name: "MAKEUP KIT",
    price: 3000,
    image: "https://i.pinimg.com/474x/0b/70/cd/0b70cd10fa66cefd59213989641a4e40.jpg"
  },
  {
    id: 2,
    name: "WATCHES",
    price: 5000,
    image: "https://i.pinimg.com/474x/59/7e/06/597e06ab35fcf2584534bc66bc453ffd.jpg"
  },
  {
    id: 3,
    name: "MENS WALLETS",
    price: 4000,
    image: "https://i.pinimg.com/236x/d6/e9/c4/d6e9c443e58dd4d69fa04587f36d2016.jpg"
  },
  {
    id: 4,
    name: "BABY STUFFS",
    price: 90000,
    image: "https://i.pinimg.com/236x/95/a2/4a/95a24af3409ca6e9797b3d0cfd7f4dd0.jpg"
  },
  {
    id: 5,
    name: "SAREE",
    price: 70000,
    image: "https://i.pinimg.com/236x/ef/8e/88/ef8e88e65a27df0b4f5ea1be39079ac5.jpg"
  },
  {
    id: 6,
    name: "BRIDAL DRESS",
    price: 60000,
    image: "https://i.pinimg.com/736x/48/16/e1/4816e173ce50da12f2557ae6df1313d5.jpg"
  },
  {
    id: 7,
    name: "LADIES DRESS",
    price: 2000,
    image: "https://i.pinimg.com/564x/3e/7f/fd/3e7ffdef37c8850ef77de36155cdff82.jpg"
  },
  {
    id: 8,
    name: "BABY GIRL DRESS",
    price: 3500,
    image: "https://i.pinimg.com/736x/86/20/8e/86208e9e9ec396b878cedf0a597a5dd7.jpg"
  }
];

let cart = [];

// Render Products (HTML bhi JS se ban raha hai 🔥)
function displayProducts() {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${product.image}" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body text-center">
            <h5>${product.name}</h5>
            <p>Rs ${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Add to Cart
function addToCart(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
  alert(product.name + " added to cart!");
}

// Show Cart
function showCart() {
  let cartItems = cart.map(item => item.name + " - Rs " + item.price).join("\n");
  alert("Cart Items:\n\n" + cartItems);
}

// Initial Call
displayProducts();

// (async () => {
//   await loadBigCirclesPreset(tsParticles);

//   await tsParticles.load({
//     id: "tsparticles",
//     options: {
//       preset: "bigCircles", // also "big-circles" is accepted
//     },
//   });
// })();

// tsParticles.load({
//   id: "tsparticles",
//   options: {
//     particles: {
//       shape: {
//         type: "square", // starting from v2, this require the square shape script
//       },
//     },
//     preset: "bigCircles", // also "big-circles" is accepted
//   },
// });
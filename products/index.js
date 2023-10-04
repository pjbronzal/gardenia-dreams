let wishlistItem = "wishlist";
let cartItem = "cart";

const products = {
  orderlist: [],
  menulist: [
    {
      id: 1,
      productName: "Standard Heather",
      category: "Flowers",
      price: 1299,
      image: "../img/flowers/standard_heather.webp",
    },
    {
      id: 2,
      productName: "Deluxe Heather",
      category: "Flowers",
      price: 1399,
      image: "../img/flowers/deluxe_heather.webp",
    },
    {
      id: 3,
      productName: "Beautiful You",
      category: "Flowers",
      price: 1399,
      image: "../img/flowers/beautiful_you.webp",
    },
    {
      id: 4,
      productName: "Be In Love",
      category: "Flowers",
      price: 1199,
      image: "../img/flowers/be_in_love.webp",
    },
    {
      id: 5,
      productName: "Beauty And The Beast",
      category: "Flowers",
      price: 1299,
      image: "../img/flowers/pres_beauty-and-the-beast.webp",
    },
    {
      id: 6,
      productName: "Frozen In Time",
      category: "Flowers",
      price: 1499,
      image: "../img/flowers/pres_frozen-in-time.webp",
    },
    {
      id: 7,
      productName: "Luminous Belle Rose",
      category: "Flowers",
      price: 1299,
      image: "../img/flowers/pres_luminous-belle-rose.webp",
    },
    {
      id: 8,
      productName: "Violet Enchantment",
      category: "Flowers",
      price: 1299,
      image: "../img/flowers/pres_violet-enchantment.webp",
    },
    {
      id: 9,
      productName: "Aglaonema",
      category: "Plants",
      price: 799,
      image: "../img/plants/aglaonema.jpg",
    },
    {
      id: 10,
      productName: "Anthurium Laceleaf",
      category: "Plants",
      price: 1099,
      image: "../img/plants/anthurium-laceleaf.webp",
    },
    {
      id: 11,
      productName: "Calathea Triostar",
      category: "Plants",
      price: 599,
      image: "../img/plants/calathea-triostar.jpg",
    },
    {
      id: 12,
      productName: "Silver King",
      category: "Plants",
      price: 599,
      image: "../img/plants/silver-king.png",
    },
    {
      id: 13,
      productName: "Echeveria Cat",
      category: "Plants",
      price: 799,
      image: "../img/plants/pot-echeveria-cat.webp",
    },
    {
      id: 14,
      productName: "Echeveria Corgi",
      category: "Plants",
      price: 999,
      image: "../img/plants/pot-echeveria-corgi.jpg",
    },
    {
      id: 15,
      productName: "Echeveria Elephant",
      category: "Plants",
      price: 799,
      image: "../img/plants/pot-echeveria-elephant.webp",
    },
    {
      id: 16,
      productName: "Echeveria Whale",
      category: "Plants",
      price: 799,
      image: "../img/plants/pot-echeveria-whale.jpg",
    },
  ],
  orderedlist: [],
  showproducts() {
    let menu = document.getElementById("menu-list");
    let menulist = "";
    this.menulist.forEach(function (data) {
      menulist += `
      
        <div class="col-md-3 col-12">
          <div class="card mb-3 position-relative"> <!-- Add position-relative to the card -->
              <p id="ids${data.id}" hidden>${data.id}</p>
              <img id="image${data.id}" src="${data.image}" class="img-fluid pt-2 px-2">
      
              <div class="card-body">
                  <p class="card-title fw-bold text-center" id="menu${data.id}">${data.productName}</p><hr>
                  <p class="card-text text-center" id="price${data.id}">₱ ${data.price}.00</p>
                  
                  <div class="container d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-2">
                      <button class="btn btn-sm me-2" onclick="addToWishlist(${data.id})"><i class="fa-regular fa-heart"></i></button>
                      <button class="btn btn-sm me-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-regular fa-eye"></i></button>
                      <button class="btn btn-sm" onclick="addToCart(${data.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                  </div>
              </div>
          </div>
        </div>

  <!-- MODAL FOR ITEM VIEWING ----------------------------------------------------------------------------------->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `;
    });
    menu.innerHTML = menulist;
  },
};

orderedlist = localStorage.getItem(wishlistItem);

products.showproducts();

// ADD TO WISHLIST *****************************************************************
function addToWishlist(id) {
  let orderedlist = JSON.parse(localStorage.getItem(wishlistItem)) || [];

  const existingItemIndex = orderedlist.findIndex((item) => item.id === id);

  let new_id = document.getElementById("ids" + id).innerText;
  let new_order = document.getElementById("menu" + id).innerText;
  let new_price = parseFloat(
    document
      .getElementById("price" + id)
      .innerText.replace("₱", "")
      .replace(".00", "")
  );
  let new_image = document.getElementById("image" + id).src;

  orderedlist.push({
    id: new_id,
    productName: new_order,
    price: new_price,
    quantity: 1,
    item: "wishlist",
    totalPrice: new_price,
    image: new_image,
  });

  localStorage.setItem(wishlistItem, JSON.stringify(orderedlist));
  alert("Added To Wishlist.");
  window.location.href = window.location.href;

  // showorder();
  // document.querySelector(`button[data-id="${id}"]`).disabled = true;
  // updateTotal();
}

// ADD TO CART *****************************************************************
function addToCart(id) {
  let orderedlist = JSON.parse(localStorage.getItem(cartItem)) || [];

  let new_id = document.getElementById("ids" + id).innerText;
  let new_order = document.getElementById("menu" + id).innerText;
  let new_price = parseFloat(
    document
      .getElementById("price" + id)
      .innerText.replace("₱", "")
      .replace(".00", "")
  );
  let new_image = document.getElementById("image" + id).src;

  orderedlist.push({
    id: new_id,
    productName: new_order,
    price: new_price,
    quantity: 1,
    item: "cart",
    totalPrice: new_price,
    image: new_image,
  });

  localStorage.setItem(cartItem, JSON.stringify(orderedlist));
  alert("Added To Cart.");
  window.location.href = window.location.href;
  // showorder();
  // document.querySelector(`button[data-id="${id}"]`).disabled = true;
  // updateTotal();
}

// SEARCH PRODUCTS *********************************************************************
// Creating Filtered Container
document.getElementById("search-button").addEventListener("click", function () {
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredProducts = products.menulist.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
  );

  updateProductList(filteredProducts);
});

function updateProductList(filteredProducts) {
  let menu = document.getElementById("menu-list");
  let menulist = "";

  if (filteredProducts.length === 0) {
    menulist = "<p>No matching products found.</p>";
  } else {
    filteredProducts.forEach(function (data) {
      menulist += `
      <div class="col-3">
        <div class="card mb-3 position-relative"> <!-- Add position-relative to the card -->
          <p id="ids${data.id}" hidden>${data.id}</p>
          <img id="image${data.id}" src="${data.image}" class="img-fluid pt-2 px-2">
      
          <div class="card-body">
              <p class="card-title fw-bold text-center" id="menu${data.id}">${data.productName}</p><hr>
              <p class="card-text text-center" id="price${data.id}">₱ ${data.price}.00</p>
              
              <div class="container d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-2">
                  <button class="btn btn-sm me-2" onclick="addToWishlist(${data.id})"><i class="fa-regular fa-heart"></i></button>
                  <button class="btn btn-sm me-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-regular fa-eye"></i></button>
                  <button class="btn btn-sm" onclick="addToCart(${data.id})"><i class="fa-solid fa-cart-shopping"></i></button>
              </div>
          </div>
        </div>
      </div>

      `;
    });
  }

  menu.innerHTML = menulist;
}

// FILTER BY CATEGORY **************************************************************************
function filterProductsByCategory(category) {
  const filteredProducts = products.menulist.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  updateProductList(filteredProducts);
}

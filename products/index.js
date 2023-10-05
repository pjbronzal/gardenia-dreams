let wishlistItem = "wishlist";
let cartItem = "cart";

const products = {
  orderlist: [],
  menulist: [
    {
      id: 1,
      productName: "Sweet & Pretty",
      category: "flowers, bouquet, best selling",
      price: 3000,
      image: "../img/flowers/sweet-pretty.webp",
    },
    {
      id: 2,
      productName: "Marmalade Skies",
      category: "flowers, bouquet, best selling",
      price: 2800,
      image: "../img/flowers/marmalade-skies.webp",
    },
    {
      id: 3,
      productName: "Fiesta",
      category: "flowers, bouquet, best selling",
      price: 3400,
      image: "../img/flowers/fiesta.webp",
    },
    {
      id: 4,
      productName: "Fall Delight",
      category: "flowers, bouquet, best selling, new arrivals",
      price: 2500,
      image: "../img/flowers/fall-delight.webp",
    },
    {
      id: 5,
      productName: "Best Day",
      category: "flowers, bouquet, best selling, luxury",
      price: 3400,
      image: "../img/flowers/best-day.webp",
    },
    {
      id: 6,
      productName: "Pumpkin Dream",
      category: "flowers, bouquet, best selling, new arrivals",
      price: 3600,
      image: "../img/flowers/pumpkin-dream.webp",
    },
    {
      id: 7,
      productName: "Clear Skies",
      category: "flowers, bouquet, best selling, luxury",
      price: 3900,
      image: "../img/flowers/clear-skies.webp",
    },
    {
      id: 8,
      productName: "Pop Of Whimsy",
      category: "flowers, bouquet, best selling, new arrivals",
      price: 4000,
      image: "../img/flowers/pop-of-whimsy.webp",
    },
    {
      id: 9,
      productName: "Truly Stunning",
      category: "flowers, bouquet, best selling, luxury",
      price: 4000,
      image: "../img/flowers/truly-stunning.webp",
    },
    {
      id: 10,
      productName: "Long Stem Red Rose",
      category: "flowers, bouquet, best selling, luxury",
      price: 4200,
      image: "../img/flowers/long-stem-red-rose.webp",
    },
    {
      id: 11,
      productName: "Prairie Sunries",
      category: "flowers, bouquet, best selling, new arrivals",
      price: 3300,
      image: "../img/flowers/prairie-sunrise.webp",
    },
    {
      id: 12,
      productName: "Blush Crush",
      category: "flowers, bouquet, best selling",
      price: 3100,
      image: "../img/flowers/blush-crush.webp",
    },
    {
      id: 13,
      productName: "Birthday Brights",
      category: "flowers, bouquet, best selling",
      price: 3600,
      image: "../img/flowers/birthday-brights.webp",
    },
    {
      id: 14,
      productName: "Autumn Orchard",
      category: "flowers, bouquet, best selling, new arrivals",
      price: 4400,
      image: "../img/flowers/autumn-orchard.webp",
    },
    {
      id: 15,
      productName: "Classic Ivory",
      category: "flowers, bouquet, best selling",
      price: 2500,
      image: "../img/flowers/classic-ivory.jpg",
    },
    {
      id: 16,
      productName: "Beyond Blue",
      category: "flowers, bouquet, best selling",
      price: 3100,
      image: "../img/flowers/beyond-blue.webp",
    },
    {
      id: 17,
      productName: "Autumn Sunshine",
      category: "flowers, bouquet, new arrivals",
      price: 3600,
      image: "../img/flowers/autumn-sunshine.webp",
    },
    {
      id: 18,
      productName: "Harvest Sunflower",
      category: "flowers, bouquet, new arrivals",
      price: 5600,
      image: "../img/flowers/harvest-sunflower.webp",
    },
    {
      id: 19,
      productName: "Sugar Plum",
      category: "flowers, bouquet, new arrivals",
      price: 2900,
      image: "../img/flowers/sugar-plum.webp",
    },
    {
      id: 20,
      productName: "Bouquet Of Blessings",
      category: "flowers, bouquet, new arrivals",
      price: 3900,
      image: "../img/flowers/bouquet-of-blessings.webp",
    },
    {
      id: 21,
      productName: "Fresh Linen",
      category: "flowers, bouquet, new arrivals, luxury",
      price: 4100,
      image: "../img/flowers/fresh-linen.webp",
    },
    {
      id: 22,
      productName: "Gourd Of Gratitude",
      category: "flowers, bouquet, new arrivals",
      price: 3600,
      image: "../img/flowers/gourd-of-gratitude.webp",
    },
    {
      id: 23,
      productName: "Red Hot",
      category: "flowers, bouquet, new arrivals",
      price: 2900,
      image: "../img/flowers/red-hot.webp",
    },
    {
      id: 24,
      productName: "Long Stem Pink Rose",
      category: "flowers, bouquet, luxury",
      price: 2900,
      image: "../img/flowers/long-stem-pink-rose.webp",
    },
    {
      id: 25,
      productName: "Radiance In Bloom",
      category: "flowers, bouquet, luxury",
      price: 4200,
      image: "../img/flowers/radiance-in-bloom.webp",
    },
    {
      id: 26,
      productName: "Ever After Rose",
      category: "flowers, bouquet, luxury",
      price: 4800,
      image: "../img/flowers/ever-after-rose.webp",
    },
    {
      id: 27,
      productName: "On One Knee Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7600,
      image: "../img/flowers/on-one-knee-set.jpeg",
    },
    {
      id: 28,
      productName: "Floral Confetti Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7000,
      image: "../img/flowers/floral-confetti-set.webp",
    },
    {
      id: 29,
      productName: "Carolina Blue Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7700,
      image: "../img/flowers/carolina-blue-set.jpeg",
    },
    {
      id: 30,
      productName: "Think Pink Bouquet Set",
      category: "flowers, bouquet, set",
      price: 7600,
      image: "../img/flowers/think-pink-set.webp",
    },
    {
      id: 31,
      productName: "Little Cherub Bouquet Set",
      category: "flowers, bouquet, set",
      price: 6800,
      image: "../img/flowers/little-cherub-set.webp",
    },
    {
      id: 32,
      productName: "Fiesta Bouquet Set Of 3",
      category: "flowers, bouquet, set",
      price: 11900,
      image: "../img/flowers/fiesta-set.webp",
    },
    {
      id: 33,
      productName: "Best Day Bouquet Set Of 3",
      category: "flowers, bouquet, set",
      price: 11500,
      image: "../img/flowers/best-day-set.webp",
    },
  ],
  orderedlist: [],
  showproducts() {
    let menu = document.getElementById("menu-list");
    let menulist = "";
    this.menulist.forEach(function (data) {
      menulist += `
      
        <div class="col-md-3 col-12">
          <div class="card mb-3 position-relative">
              <p id="ids${data.id}" hidden>${data.id}</p>
              <img id="image${data.id}" src="${data.image}" class="img-fluid pt-2 px-2">
      
              <div class="card-body">
                  <p class="card-title text-center" id="menu${data.id}">${data.productName}</p><hr>
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
              <p class="card-title text-center" id="menu${data.id}">${data.productName}</p><hr>
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
  const filteredProducts = products.menulist.filter((product) =>
    product.category.toLowerCase().includes(category.toLowerCase())
  );

  updateProductList(filteredProducts);
}

function displayWishlistItems() {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistDiv = document.getElementById("wishlist-div");

  const wishlistHTML = wishlistItems
    .map((item) => {
      return `
      <div class="col-3">
        <div class="card mb-3 position-relative">
          <p id="ids${item.id}" hidden>${item.id}</p>
          <img id="image${item.id}" src="${item.image}" class="img-fluid pt-2 px-2">
    
          <div class="card-body text-center">
              <p class="card-title fw-bold" id="menu${item.id}">${item.productName}</p>
              <p class="card-text" id="price${item.id}">₱ ${item.price}.00</p>
              <button class="btn btn-sm" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping me-2"></i>Add To Cart</button>
              <button class="btn btn-sm deleteWishItem" onclick=""><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  wishlistDiv.innerHTML = wishlistHTML;
}

displayWishlistItems();

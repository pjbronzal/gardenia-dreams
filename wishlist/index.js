function displayWishlistItems() {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistDiv = document.getElementById("wishlist-div");

  const wishlistHTML = wishlistItems
    .map((item) => {
      return `
      <div class="col-3">
        <div class="card mb-3 position-relative">
          <button class="remove pe-2"><i class="fa-solid fa-x"></i></button>
          <p id="ids${item.id}" hidden>${item.id}</p>
          <img id="image${item.id}" src="${item.image}" class="img-fluid pt-2 px-2">
    
          <div class="card-body text-center">
              <p class="card-title fw-bold" id="menu${item.id}">${item.productName}</p>
              <p class="card-text" id="price${item.id}">₱ ${item.price}.00</p>
              <button class="btn btn-sm" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping me-2"></i>Add To Cart</button>
              
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  wishlistDiv.innerHTML = wishlistHTML;
}

{
  /* <button class="btn btn-sm deleteWishItem" onclick="deleteWishlistItem(${item.id})"><i class="fa-solid fa-trash"></i>Remove</button> */
}

function deleteWishlistItem(itemId) {
  // Retrieve the current wishlist from local storage
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Find the index of the item with the given itemId in the wishlistItems array
  const itemIndex = wishlistItems.findIndex((item) => item.id === itemId);

  // Check if the item was found in the wishlist
  if (itemIndex !== -1) {
    // Remove the item from the wishlistItems array
    wishlistItems.splice(itemIndex, 1);

    // Update the localStorage with the modified wishlist
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

    // Refresh the display of wishlist items
    displayWishlistItems();
  }
}

displayWishlistItems();

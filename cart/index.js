function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDiv = document.getElementById("cart-div");

  const cartHTML = cartItems
    .map((item) => {
      return `
      <div class="row">
        <div class="card mb-3 position-relative">
            <div class="col-sm-3">
              <p id="ids${item.id}" hidden>${item.id}</p>
              <img id="image${item.id}" src="${item.image}" class="img-fluid pt-2 px-2">
            </div>

            <div class="col-sm-6"></div>
            <div class="col-sm-3"></div>
        </div>
      </div>
    `;
    })
    .join("");

  cartDiv.innerHTML = cartHTML;
}

displayCartItems();

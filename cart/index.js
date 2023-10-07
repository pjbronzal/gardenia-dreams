function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDiv = document.getElementById("cart-div");

  if (cartItems.length === 0) {
    cartDiv.innerHTML = "<p>No items added yet.</p>";
    return;
  }

  const cartHTML = cartItems
    .map((item) => {
      return `
      <div class="row">
        <div class="card mb-3 position-relative p-2">
          <div class="row">
            <div class="col-sm-3">
              <p id="ids${item.id}" hidden>${item.id}</p>
              <img id="image${item.id}" src="${item.image}" class="img-fluid">
            </div>

            <div class="col-sm-6 cartItem">
              <p class="card-title pt-2" id="ids${item.id}">${item.productName}</p>
              <p class="card-text" id="price${item.id}">Price: ₱ ${item.price}.00</p>

              <div class="wrapper qty">
                <span class="minus" onclick="minusQty(${item.id})">-</span>
                <span class="num" id="quantity${item.id}">${item.quantity}</span>
                <span class="plus" onclick="addQty(${item.id})">+</span>
              </div>
            </div>

            <div class="col-sm-3 d-flex justify-content-end m-auto">
              <button class="btn btn-sm me-2"><i class="fa-solid fa-trash"></i></button>
            </div>

          </div>
        </div>
      </div>
    `;
    })
    .join("");

  cartDiv.innerHTML = cartHTML;
}

function addQty(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  currentQuantity++;
  quantityElement.innerText = currentQuantity;
}

function minusQty(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityElement.innerText = currentQuantity;
  }
}

displayCartItems();

function formatAccounting(amount) {
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// OLD  DISP FUNCTION
// function displayCartItems() {
//   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartDiv = document.getElementById("cart-div");

//   if (cartItems.length === 0) {
//     cartDiv.innerHTML = "<p class='text-end mt-5'>No items added yet.</p>";
//     return;
//   }

//   const cartHTML = cartItems
//     .map((item, index) => {
//       const subtotal = item.price * item.quantity;
//       return `
//       <div class="row">
//         <div class="card mb-3 position-relative p-2">
//           <div class="row">
//             <div class="col-sm-3">
//               <p id="ids${item.id}" hidden>${item.id}</p>
//               <img id="image${item.id}" src="${item.image}" class="img-fluid">
//             </div>

//             <div class="col-sm-5 cartItem">
//               <p class="card-title pt-2" id="ids${item.id}">${item.productName}</p>
//               <p class="card-text" id="price${item.id}">Price: ${formatAccounting(item.price)}</p>

//               <div class="wrapper qty">
//                 <span class="minus" onclick="minusQty(${item.id})">-</span>
//                 <span class="num" id="quantity${item.id}">${item.quantity}</span>
//                 <span class="plus" onclick="addQty(${item.id})">+</span>
//               </div>
//             </div>

//             <div class="col-sm-4 d-flex flex-column justify-content-between align-items-end deleteItem">
//               <button class="btn btn-sm mt-2" onclick="deleteThisItem(${index})"><i class="fa-solid fa-trash"></i></button>
//               <p class="card-title pt-2" id="subtotal${item.id}">${formatAccounting(subtotal)}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//     })
//     .join("");

//   cartDiv.innerHTML = cartHTML;
// }

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTableBody = document.getElementById("cart-div");

  if (cartItems.length === 0) {
    cartTableBody.innerHTML = "<tr><td colspan='6' class='text-center'>No items added yet.</td></tr>";
    return;
  }

  const cartHTML = cartItems
    .map((item, index) => {
      const subtotal = item.price * item.quantity;
      return `
        <tr>
            <td class="pro-thumbnail">
              <button onclick="deleteThisItem(${index})"><i class="bi bi-x-circle"></i></button>
              <img class="img-fluid" src="${item.image}" alt="Product"</i>
            </td>
            <td class="pro-title">${item.productName}</td>
            <td class="pro-price">₱${formatAccounting(item.price)}</td>
            <td class="pro-quantity">
                <div class="quantity">
                    <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box num" value="0" type="text" id="quantity${item.id}">
                        <div class="dec qtybutton" onclick="minusQty(${item.id})">-</div>
                        <div class="inc qtybutton" onclick="addQty(${item.id})">+</div>
                        <div class="dec qtybutton"><i class="fa fa-minus"></i></div>
                        <div class="inc qtybutton"><i class="fa fa-plus"></i></div>
                    </div>
                </div>
            </td>
            <td class="pro-subtotal">₱${formatAccounting(subtotal)}</td>
        </tr>
    `;
    })
    .join("");

  cartTableBody.innerHTML = cartHTML;
}


function displayTotal() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let itemCount = 0;
  
  cartItems.forEach((item) => {
    const subtotalElement = document.getElementById(`subtotal${item.id}`);
    const subtotal = parseFloat(subtotalElement.innerText.replace(/[^0-9.]/g, ''));
    total += subtotal;

    itemCount += item.quantity;
  });

  // OVERALL TOTAL AMOUNT
  const overallTotal = total + 38;
  

  const totalElement = document.getElementById("subTotal");
  totalElement.innerText = `${formatAccounting(total)}`;

  // ITEM COUNT
  const totalItemsElement = document.getElementById("totalItems");
  totalItemsElement.innerText = `Item(s): ${itemCount}`;

  const overallTotalElement = document.getElementById("overAll");
  overallTotalElement.innerText = `Total Amount: ${formatAccounting(overallTotal)}`;
}


function addQty(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  currentQuantity++;
  quantityElement.innerText = currentQuantity;
  updateSubtotal(itemId, currentQuantity);
  displayTotal();
}

function minusQty(itemId) {
  const quantityElement = document.getElementById(`quantity${itemId}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityElement.innerText = currentQuantity;
    updateSubtotal(itemId, currentQuantity);
  }
  displayTotal();
}

function updateSubtotal(itemId, quantity) {
  const priceElement = document.getElementById(`price${itemId}`);
  const price = parseFloat(priceElement.innerText.replace(/[^0-9.]/g, ''));
  const subtotal = price * quantity;
  const subtotalElement = document.getElementById(`subtotal${itemId}`);
  subtotalElement.innerText = formatAccounting(subtotal);
}

function deleteThisItem(index) {
  let orderedlist = JSON.parse(localStorage.getItem("cart"));

  if (index !== -1) {
    orderedlist.splice(index, 1);

    if (orderedlist.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(orderedlist));
    }

    displayCartItems();
    alert("Item deleted successfully.");
    window.location.href = window.location.href;
  }
  displayTotal();
}

displayCartItems();
displayTotal();
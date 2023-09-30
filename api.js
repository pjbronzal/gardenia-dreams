let newCustomer = new Date().getTime();

const customer = {
  orderlist: [],
  menulist: [
    {
      id: 1,
      productName: "Flower Bouquets",
      category: "bouquets",
      price: 450,
      image: "img/1.jpg",
    },
    {
      id: 2,
      productName: "Flower",
      category: "bouquets",
      price: 450,
      image: "img/1.jpg",
    },
    {
      id: 3,
      productName: "Flower Bouquets",
      category: "bouquets",
      price: 450,
      image: "img/1.jpg",
    },
    {
      id: 4,
      productName: "Flower",
      category: "bouquets",
      price: 450,
      image: "img/1.jpg",
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
              <h6 class="card-title fw-bold text-center" id="menu${data.productName}">${data.productName}</h6>
              <p class="card-text text-center" id="price${data.price}">₱ ${data.price}.00</p>
              
              <!-- Add position-absolute to the container of the buttons -->
              <div class="container d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-2">
                  <button class="btn btn-sm btn-success me-2" onclick="addToWishlist(${data.id})"><i class="fa-regular fa-heart"></i></button>
                  <button class="btn btn-sm btn-success" onclick="addToCart(${data.id})"><i class="fa-solid fa-cart-shopping"></i></button>
              </div>
          </div>
      </div>
  </div>
  `;
    });
    menu.innerHTML = menulist;
  },
};

orderedlist = localStorage.getItem(newCustomer);

function addToWishlist(id) {
  let orderedlist = JSON.parse(localStorage.getItem(newCustomer)) || [];

  const existingItemIndex = orderedlist.findIndex((item) => item.id === id);

  if (existingItemIndex !== -1) {
    alert("This item is already in your order."); //not working :<
  } else {
    let new_id = document.getElementById("ids" + id);
    let new_order = document.getElementById("menu" + id);
    let new_price = document.getElementById("price" + id);
    // let new_price = parseFloat(
    //   document
    //     .getElementById("price" + id)
    //     .innerText.replace("₱", "")
    //     .replace(".00", "")
    // );

    orderedlist.push({
      id: new_id,
      productName: new_order,
      price: new_price,
      quantity: 1,
      totalPrice: new_price,
    });

    localStorage.setItem(newCustomer, JSON.stringify(orderedlist));
    // showorder();

    alert("Added To Wishlist.");

    // document.querySelector(`button[data-id="${id}"]`).disabled = true;
  }
  //   updateTotal();
}

customer.showproducts();
// showorder();

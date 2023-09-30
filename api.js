const customer = {
  orderlist: [],
  menulist: [
    {
      id: 1,
      productName: "Flower Bouquets",
      price: 450,
      image: "img/1.jpg",
    },
    {
      id: 2,
      productName: "Flower",
      price: 450,
      image: "img/1.jpg",
    },
    {
      id: 3,
      productName: "Flower Bouquets",
      price: 450,
      image: "img/1.jpg",
    },
    {
      id: 4,
      productName: "Flower",
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
              <p class="card-text text-center" id="price${data.price}">P ${data.price}.00</p>
              
              <!-- Add position-absolute to the container of the buttons -->
              <div class="container d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-2">
                  <button class="btn btn-sm btn-success me-2"><i class="fa-regular fa-heart"></i></button>
                  <button class="btn btn-sm btn-success"><i class="fa-solid fa-cart-shopping"></i></button>
              </div>
          </div>
      </div>
  </div>
  `;
    });
    menu.innerHTML = menulist;
  },
};

customer.showproducts();
showorder();

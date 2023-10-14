// Define the products array
const products = [
    {
      title: "Aurora",
      image1: "/images/Bouquets/Aurora roses.jpg",
      image2: "/images/Bouquets/Aurora roses3.jpg",
      image3: "",
      price: 599,
      oldPrice: 499,
      content: "hakdog",
    },
    {
        title: "Flamingo Rose",
        image1: "/images/Bouquets/Bahamas Flamingo Pink Rose.jpg",
        image2: "/images/Bouquets/Bahamas Flamingo Pink Rose4.jpg",
        image3: "",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Cappuccino",
        image1: "/images/Bouquets/Cappuccino rose.jpg",
        image2: "/images/Bouquets/Cappuccino rose3.jpg",
        image3: "/images/Bouquets/Cappuccino rose2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Golden Sun",
        image1: "/images/Bouquets/Golden warm sun.jpg",
        image2: "/images/Bouquets/Golden warm sun3.jpg",
        image3: "/images/Bouquets/Golden warm sun2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Heart Love",
        image1: "/images/Bouquets/Love in the heart.jpg",
        image2: "/images/Bouquets/Love in the heart4.jpg",
        image3: "/images/Bouquets/Love in the heart4.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "All Seasons",
        image1: "/images/Bouquets/Love you for all seasons.jpg",
        image2: "/images/Bouquets/Love you for all seasons3.jpg",
        image3: "/images/Bouquets/Love you for all seasons2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Heartfelt Love",
        image1: "/images/Bouquets/love you with all my heart.jpg",
        image2: "/images/Bouquets/love you with all my heart2.jpg",
        image3: "/images/Bouquets/Love you for all seasons2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Intention",
        image1: "/images/Bouquets/The original intention is the same.jpg",
        image2: "/images/Bouquets/The original intention is the same12.jpg",
        image3: "",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Blooming",
        image1: "/images/Bouquets/Blooming.jpg",
        image2: "/images/Bouquets/Blooming2.jpg",
        image3: "/images/Bouquets/Love you for all seasons2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Concern",
        image1: "/images/Bouquets/Concerning You.jpg",
        image2: "/images/Bouquets/love you with all my heart1.jpg",
        image3: "/images/Bouquets/Love you for all seasons2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Love You",
        image1: "/images/Bouquets/love you with all my heart.jpg",
        image2: "/images/Bouquets/love you with all my heart1.jpg",
        image3: "/images/Bouquets/Love you for all seasons2.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
      {
        title: "Deep Love",
        image1: "/images/Bouquets/Deep love.jpg",
        image2: "/images/Bouquets/Deep love3.jpg",
        image3: "/images/Bouquets/Deep love3.jpg",
        price: 599,
        oldPrice: 499,
        content: "hakdog",

      },
    ];
  // Function to generate the product HTML
  function generateProductHTML(product) {
    const productHTML = `
      <div class="product-item">
        <div class="single-product position-relative mr-0 ml-0">
          <div class="product-image">
            <a class="d-block" href="product-details.html">
              <img src="${product.image1}" alt="" class="product-image-1 w-100">
              <img src="${product.image2}" alt="" class="product-image-2 position-absolute w-100">
            </a>
            <span class="onsale">Sale!</span>
            <div class="add-action d-flex flex-column position-absolute">
              <a href="compare.html" title="Compare">
                <i class="lnr lnr-sync" data-toggle="tooltip" data-placement="left" title="Compare"></i>
              </a>
              <a href="wishlist.html" title="Add To Wishlist">
                <i class="lnr lnr-heart" data-toggle="tooltip" data-placement="left" title="Wishlist"></i>
              </a>
              <a href="#exampleModalCenter" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                <i class="lnr lnr-eye" data-toggle="tooltip" data-placement="left" title="Quick View"></i>
              </a>
            </div>
          </div>
          <div class="product-content">
            <div class="product-title">
              <h4 class="title-2"><a href="product-details.html">${product.title}</a></h4>
            </div>
            <div class="price-box">
              <span class="regular-price">${product.price}</span>
              <span class="old-price"><del>${product.oldPrice}</del></span>
            </div>
            <a href="cart.html" class="btn product-cart">Add to Cart</a>
          </div>
          <div class="product-content-listview">
            <div class="product-title">
              <h4 class="title-2"><a href="product-details.html">${product.title}</a></h4>
            </div>
            <div class="price-box">
              <span class="regular-price">${product.price}</span>
              <span class="old-price"><del>${product.oldPrice}</del></span>
            </div>
            <p class="desc-content">${product.content}</p>
            <div class="button-listview">
              <a href="cart.html" class="btn product-cart button-icon flosun-button dark-btn" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                <span>Add to Cart</span>
              </a>
              <a class="list-icon" href="compare.html" title="Compare">
                <i class="lnr lnr-sync" data-toggle="tooltip" data-placement="top" title="Compare"></i>
              </a>
              <a class="list-icon" href="wishlist.html" title="Add To Wishlist">
                <i class="lnr lnr-heart" data-toggle="tooltip" data-placement="top" title="Wishlist"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    return productHTML;
  }
  
  // Function to display products on the page
  function displayProducts() {
    const shopWrapper = document.querySelector('.shop_wrapper.grid_3');
    products.forEach((product) => {
      const productHTML = generateProductHTML(product);
      shopWrapper.innerHTML += productHTML;
    });
  }
  
  // Call the displayProducts function to show the products
  displayProducts();

  
  // Function to handle sorting of products
function sortProducts() {
    const selectElement = document.querySelector('.form-control.nice-select');
    selectElement.addEventListener('change', (event) => {
      const sortBy = event.target.value;
      // Logic to sort the products array based on the selected option
      if (sortBy === '1') {
        // Sort alphabetically, A-Z
        products.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === '2') {
        // Sort by popularity
        // Add your logic here
      } else if (sortBy === '3') {
        // Sort by newness
        // Add your logic here
      } else if (sortBy === '4') {
        // Sort by price: low to high
        products.sort((a, b) => a.price - b.price);
      } else if (sortBy === '5') {
        // Sort by price: high to low
        products.sort((a, b) => b.price - a.price);
      }
      // Call the displayProducts function to re-render the sorted products
      displayProducts();
    });
  }
  
  // Call the sortProducts function to enable sorting
  sortProducts();

  // Function to handle list view and quick view
function handleProductViews() {
    const shopWrapper = document.querySelector('.shop_wrapper.grid_3');
    shopWrapper.addEventListener('click', (event) => {
      const targetElement = event.target;
      if (targetElement.classList.contains('btn-list')) {
        // Switch to list view
        shopWrapper.classList.add('list-view');
      } else if (targetElement.classList.contains('lnr-eye')) {
        // Open quick view modal
        const productTitle = targetElement.closest('.single-product').querySelector('.title-2 a').textContent;
        // Add your logic to open the quick view modal and display the product details
      }
    });
  }
  
  // Call the handleProductViews function to enable list view and quick view
  handleProductViews();
  
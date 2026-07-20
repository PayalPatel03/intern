const apiUrl = 'https://fakestoreapi.com/products';

//view data on conslole
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(products) {
  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 col-lg-3';

    col.innerHTML = `
      <div class="card h-100 shadow-lg">
        <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
           <p class="card-text text-secondary">${product.description}</p>
          <div class="mt-auto">
             <span class="badge bg-success">$${product.price}</span>
          </div>
        </div>
      </div>
    `;

    productList.appendChild(col);
    
  });
}

fetchProducts();
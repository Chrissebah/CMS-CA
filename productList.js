const apiUrl = 'https://www.onechrissebah.no/wp-json/wc/store/products/';
const productContainer = document.querySelector('.products');

async function getProducts() {
	try {
		const response = await fetch(apiUrl);
		const products = await response.json();
		createProductList(products);
	} catch (error) {
		console.error(error);
	}
}

function createProductList(products) {
    productContainer.innerHTML = '';
    products.forEach(product => {
      const productLink = document.createElement('a');
      productLink.href = `product.html?id=${product.id}`;
      productLink.textContent = product.name;
  
      const productImage = document.createElement('img');
      productImage.src = product.images[0].src;
      productImage.alt = product.name;
  
      const productImageLink = document.createElement('a');
      productImageLink.href = `product.html?id=${product.id}`;
      productImageLink.appendChild(productImage);
  
      const productListItem = document.createElement('li');
      productListItem.appendChild(productImageLink);
      productListItem.appendChild(productLink);
  
      productContainer.appendChild(productListItem);
    });
  }

getProducts();
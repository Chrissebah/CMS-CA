const apiUrl = 'https://www.onechrissebah.no/wp-json/wc/store/products/';
const productContainer = document.querySelector('.product-details');

async function getProduct() {
	try {
		const searchParams = new URLSearchParams(window.location.search);
		const id = searchParams.get('id');

		const response = await fetch(apiUrl + id);
		const product = await response.json();

		createProductDetails(product);
	} catch (error) {
		console.error(error);
	}
}

function createProductDetails(product) {
	productContainer.innerHTML = `
		<h2>${product.name}</h2>
		<img src="${product.images[0].src}" alt="${product.name}">
		<p>${product.description}</p>
	`;
}

getProduct();
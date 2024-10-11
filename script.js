document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p><strong><b>Price:</b></strong> $${product.price}</p>
                   <!--<p>${product.description}</p>-->
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p><strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)</p>
                `;
                productContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
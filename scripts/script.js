// Script.js

let products;
window.addEventListener('DOMContentLoaded', () => {

  // Check if array is already in local storage
  if (localStorage.getItem('products') == null || localStorage.getItem('products') == "undefined") {

  // Fetch data from URL to get product items
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      products = data
      localStorage.setItem('products', JSON.stringify(products))
    });

  } else {
    products = JSON.parse(localStorage.getItem('products'));
  }
});

JSON.parse(products).forEach(product => {
  let newItem = document.createElement('product-item');
  newItem.item = prod;
});


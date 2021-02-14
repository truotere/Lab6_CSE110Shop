// product-item.js

class ProductItem extends HTMLElement {
  
  constructor() {

    super();

    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
      </style> 

      <li class="product">
        <img src="" alt="" width=200>
        <p class="title"></p>
        <p class="price"></p>
        <button onclick="alert('Added to Cart!')">Add to Cart</button>
      </li>
    `;  

    // Create a shadow root
    this.attachShadow({mode: 'open'})     // sets and returns 'this.shadowRoot'
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  // Get item
  get item() {
    return this.getAttribute('item');
  }

  // Set item
  set item(item) {
    this.shadowRoot.querySelector('img').src = item.image;
    return this.getAttribute('item');
  }




  /*
  document.getElementByTagName("BUTTON").onclick = () => {
    var counts = document.getElementById('cart-count').innerHTML;
    document.getElementById('cart-count').innerHTML = counts;
    localStorage.setItem("addd", count)
  };

  document.getElementsByTagName("BUTTON").onclick = () => {
    document.getElementById('cart-count').value++;
  };
  */




}

customElements.define('product-item', ProductItem);
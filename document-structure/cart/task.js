let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');
const addProduct = document.querySelectorAll('.product__add');

product.forEach((elem) => {
  elem.addEventListener('click', function () {
    let productAdd = elem.querySelector('.product__quantity-control_inc');
    let productRemove = elem.querySelector('.product__quantity-control_dec');
    let productQuantity = elem.querySelector('.product__quantity-value');

    let quantity = + productQuantity.innerText;
    productAdd.onclick = function () {
      quantity += 1;
      productQuantity.innerText = quantity;
    }

    productRemove.onclick = function () {
      if (quantity > 1) {
        quantity--;
      }
      productQuantity.innerText = quantity;
    }
  })

})

addProduct.forEach(elem => {
  elem.addEventListener('click', () => {
    let product = elem.closest('.product');
    let id = product.dataset.id;
    let img = product.querySelector('img').src;
    let quantityValue = product.querySelector('.product__quantity-value');
    const cartProducts = Array.from(cart.getElementsByClassName('cart__product'));
    const findProduct = cartProducts.find(item => item.dataset.id === id);

    if (findProduct) {
      const productInCart = findProduct.querySelector('.cart__product-count');
      productInCart.textContent = +quantityValue.textContent + +productInCart.textContent;
    } else {
      cart.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${id}">
          <img class="cart__product-image" src="${img}">
          <div class="cart__product-count">${quantityValue.textContent}</div>
          </div>`);
    }
  });
});


function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];
   // returns collection and get first el ---> [0]
   output.value = '';

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains("add-product") && checked != true) {
         //or ---> ev.target.classList.contains("add-product")
         // ev.target.className == "add-product"
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent
         const price = Number(product.querySelector('.product-line-price').textContent);
         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   let checked = false;
   function checkout(ev) {
      checked = true;
      // save unique keys
      const products = new Set();
      cart.forEach(p => products.add(p.name));

      // reduce ---> start from 0,  t = total and c = current
      const total = cart.reduce((t, c) => t + c.price, 0);

      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
      ev.target.removeEventListener('click', checkout)
      ev.target.removeEventListener('click', onClick)

   }
}
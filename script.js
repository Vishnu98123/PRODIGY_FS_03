
fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `<h2>${p.name}</h2><p>${p.description}</p><p>$${p.price}</p>`;
      container.appendChild(div);
    });
  });

// Seleciona elementos do DOM
const productForm = document.getElementById("productForm");
const productTable = document.getElementById("productTable").querySelector("tbody");

// Armazena os produtos
let products = [];

// Adiciona um produto
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const productName = document.getElementById("productName").value.trim();
  const productQuantity = parseInt(document.getElementById("productQuantity").value, 10);

  if (productName && productQuantity >= 0) {
    products.push({ name: productName, quantity: productQuantity });
    renderProducts();
    productForm.reset();
  }
});

// Renderiza a tabela de produtos
function renderProducts() {
  productTable.innerHTML = "";

  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>
        <button class="action update" onclick="updateQuantity(${index}, 'increase')">+</button>
        <button class="action update" onclick="updateQuantity(${index}, 'decrease')">-</button>
        <button class="action delete" onclick="deleteProduct(${index})">Remover</button>
      </td>
    `;

    productTable.appendChild(row);
  });
}

// Atualiza a quantidade do produto
function updateQuantity(index, action) {
  if (action === "increase") {
    products[index].quantity++;
  } else if (action === "decrease" && products[index].quantity > 0) {
    products[index].quantity--;
  }
  renderProducts();
}

// Remove um produto
function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

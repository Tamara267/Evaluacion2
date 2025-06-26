let carrito = [];

function agregarAlCarrito(nombreProducto) {
  carrito.push(nombreProducto);
  actualizarCarrito();
}

function clearCart() {
  carrito = [];
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("cart-items");
  lista.innerHTML = "";

  if (carrito.length === 0) {
    const item = document.createElement("li");
    item.className = "list-group-item text-muted text-center";
    item.textContent = "El carrito está vacío.";
    lista.appendChild(item);
    return;
  }

  carrito.forEach((producto, index) => {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    item.textContent = producto;

    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-sm btn-outline-danger";
    botonEliminar.textContent = "Quitar";

    botonEliminar.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };

    item.appendChild(botonEliminar);
    lista.appendChild(item);
  });
}

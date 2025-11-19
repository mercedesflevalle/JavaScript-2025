// Array con los perros
const perros = [
  {
    id: 1,
    raza: "Caniche Toy",
    edad: 2,
    precio: 50000,
    imagen: "./assets/canicheToy.png"
  },
  {
    id: 2,
    raza: "Golden Retriever",
    edad: 1,
    precio: 100000,
    imagen: "./assets/goldenRetriever.jpeg"
  },
  {
    id: 3,
    raza: "Jack Russel",
    edad: 1.5,
    precio: 80000,
    imagen: "./assets/jackRussel.jpg"
  },
  {
    id: 4,
    raza: "Bulldog",
    edad: 4,
    precio: 90000,
    imagen: "./assets/bullDog.jpg"
  },
  {
    id: 5,
    raza: "Husky Siberiano",
    edad: 2,
    precio: 30000,
    imagen: "./assets/huskySiberiano.jpg"
  }
];


const contenedorPerritos = document.getElementById("perros-container");
const contenedorCarrito = document.getElementById("carrito-lista");
const totalCarrito = document.getElementById("carrito-total");


const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cards de perritos
function mostrarPerritos() {
  contenedorPerritos.innerHTML = "";

  perros.forEach((perro) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${perro.imagen}" alt="${perro.raza}">
      <h3>${perro.raza}</h3>
      <p>Edad: ${perro.edad} años</p>
      <p class="precio">Precio: $${perro.precio}</p>
      <button id="btn-${perro.id}">Agregar al carrito</button>
    `;

    contenedorPerritos.appendChild(card);

    const boton = document.getElementById(`btn-${perro.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(perro);
    });
  });
}

// Agregar un perro al carrito
function agregarAlCarrito(perro) {
  const itemExistente = carrito.find((item) => item.id === perro.id);

  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({
      ...perro,
      cantidad: 1
    });
  }

  // Guardar carrito en storage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Actualizar 
  renderCarrito();
}

function renderCarrito() {
  contenedorCarrito.innerHTML = "";

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = "<p>No agregaste ningún perrito todavía!</p>";
    totalCarrito.textContent = "Total: $0";
    return;
  }

  let total = 0;

  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");

    div.innerHTML = `
      <span>${item.raza} (x${item.cantidad})</span>
      <span>$${item.precio * item.cantidad}</span>
      <button id="eliminar-${item.id}">X</button>
    `;

    contenedorCarrito.appendChild(div);

    const botonEliminar = document.getElementById(`eliminar-${item.id}`);
    botonEliminar.addEventListener("click", () => {
      eliminarDelCarrito(item.id);
    });

    total += item.precio * item.cantidad;
  });

  totalCarrito.textContent = `Total: $${total}`;
}

// Eliminar un perro del carrito
function eliminarDelCarrito(id) {
  const carritoActualizado = carrito.filter((perro) => perro.id !== id);

  carrito.length = 0;
  carrito.push(...carritoActualizado);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  renderCarrito();
}

mostrarPerritos();
renderCarrito();

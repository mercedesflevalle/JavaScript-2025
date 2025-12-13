const contenedorPerritos = document.getElementById("perros-container");
const contenedorCarrito = document.getElementById("carrito-lista");
const totalCarrito = document.getElementById("carrito-total");

const formCheckout = document.getElementById("checkout-form");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const btnVaciar = document.getElementById("btn-vaciar");

let perros = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function toast(texto, esError = false) {
  Toastify({
    text: texto,
    duration: 2200,
    gravity: "top",
    position: "right",
    style: {
      background: esError ? "#ef4444" : "#22c55e",
      color: "white",
      fontWeight: "700",
      borderRadius: "8px",
    },
  }).showToast();
}

async function cargarPerros() {
  try {
    const res = await fetch("./perros.json");
    if (!res.ok) throw new Error("No se pudo cargar perros.json");
    perros = await res.json();
  } catch (error) {
    // Sin console.log para entrega final
    await Swal.fire({
      icon: "error",
      title: "Ups…",
      text: "No se pudieron cargar los perritos. Revisá que perros.json exista y esté bien ubicado.",
    });
    perros = [];
  }
}

function mostrarPerritos() {
  contenedorPerritos.innerHTML = "";

  if (perros.length === 0) {
    contenedorPerritos.innerHTML = "<p>No hay perritos para mostrar.</p>";
    return;
  }

  perros.forEach((perro) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${perro.imagen}" alt="${perro.raza}">
      <h3>${perro.raza}</h3>
      <p>Edad: ${perro.edad} años</p>
      <p class="precio">Precio: $${perro.precio}</p>
      <button data-id="${perro.id}">Agregar al carrito</button>
    `;

    const boton = card.querySelector("button");
    boton.addEventListener("click", () => agregarAlCarrito(perro.id));

    contenedorPerritos.appendChild(card);
  });
}

function agregarAlCarrito(idPerro) {
  const perro = perros.find((p) => p.id === idPerro);
  if (!perro) {
    toast("No se encontró ese perrito", true);
    return;
  }

  const itemExistente = carrito.find((item) => item.id === idPerro);
  if (itemExistente) itemExistente.cantidad++;
  else carrito.push({ ...perro, cantidad: 1 });

  guardarCarrito();
  renderCarrito();
  toast("Agregado al carrito 🐾");
}

function calcularTotal() {
  return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

function renderCarrito() {
  contenedorCarrito.innerHTML = "";

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = "<p>No agregaste ningún perrito todavía!</p>";
    totalCarrito.textContent = "Total: $0";
    return;
  }

  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");

    div.innerHTML = `
      <span>${item.raza} (x${item.cantidad})</span>
      <span>$${item.precio * item.cantidad}</span>
      <button aria-label="Eliminar ${item.raza}">X</button>
    `;

    const btnEliminar = div.querySelector("button");
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(item.id));

    contenedorCarrito.appendChild(div);
  });

  totalCarrito.textContent = `Total: $${calcularTotal()}`;
}

function eliminarDelCarrito(id) {
  const index = carrito.findIndex((p) => p.id === id);
  if (index === -1) return;

  carrito.splice(index, 1);
  guardarCarrito();
  renderCarrito();
  toast("Eliminado del carrito");
}

function vaciarCarrito() {
  carrito.length = 0;
  guardarCarrito();
  renderCarrito();
  toast("Carrito vacío");
}

function precargarFormulario() {
  const datos = JSON.parse(localStorage.getItem("checkoutDatos")) || {
    nombre: "Pilar",
    email: "",
  };

  inputNombre.value = datos.nombre;
  inputEmail.value = datos.email;
}

function guardarFormulario() {
  localStorage.setItem(
    "checkoutDatos",
    JSON.stringify({
      nombre: inputNombre.value.trim(),
      email: inputEmail.value.trim(),
    })
  );
}

// Simula “proceso de compra” real (entrada → procesamiento → salida)
async function finalizarCompra(e) {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const total = calcularTotal();

  guardarFormulario();

  if (carrito.length === 0) {
    toast("Tu carrito está vacío", true);
    return;
  }

  if (!nombre || !email) {
    toast("Completá nombre y email para comprar", true);
    return;
  }

  const confirmacion = await Swal.fire({
    icon: "question",
    title: "Confirmar compra",
    html: `
      <p><strong>Cliente:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Total:</strong> $${total}</p>
    `,
    showCancelButton: true,
    confirmButtonText: "Comprar",
    cancelButtonText: "Cancelar",
  });

  if (!confirmacion.isConfirmed) return;

  // “Procesamiento” asíncrono (promesa realista)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const ordenId = `ORD-${Date.now().toString().slice(-6)}`;

  await Swal.fire({
    icon: "success",
    title: "¡Compra realizada! 🎉",
    text: `Tu orden ${ordenId} fue generada correctamente.`,
  });

  vaciarCarrito();
}

btnVaciar.addEventListener("click", async () => {
  if (carrito.length === 0) {
    toast("No hay nada para vaciar", true);
    return;
  }

  const r = await Swal.fire({
    icon: "warning",
    title: "¿Vaciar carrito?",
    text: "Esta acción no se puede deshacer.",
    showCancelButton: true,
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar",
  });

  if (r.isConfirmed) vaciarCarrito();
});

formCheckout.addEventListener("submit", finalizarCompra);

async function init() {
  precargarFormulario();
  await cargarPerros();
  mostrarPerritos();
  renderCarrito();
}

init();

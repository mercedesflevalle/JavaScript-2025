const IVA = 0.21;
const destinos = [
  { codigo: "A1", nombre: "Buenos Aires", precioPorDia: 15000 },
  { codigo: "B2", nombre: "Madrid", precioPorDia: 30000 },
  { codigo: "C3", nombre: "Tokio", precioPorDia: 55000 },
  { codigo: "D4", nombre: "Nueva York", precioPorDia: 40000 },
];

function pedirDestino() {
  let menu = "Elegi un destino para viajar:\n";
  for (let i = 0; i < destinos.length; i++) {
    menu += `${destinos[i].codigo}) ${destinos[i].nombre} - $${destinos[i].precioPorDia} por día\n`;
  }
  console.log(menu);
  let codigoElegido = prompt(
    "Ingresá el código del destino que querés elegir:"
  );
  let destinoSeleccionado = null;
  for (let i = 0; i < destinos.length; i++) {
    if (codigoElegido.toUpperCase() === destinos[i].codigo) {
      destinoSeleccionado = destinos[i];
      break;
    }
  }
  if (destinoSeleccionado) {
    alert(
      `Elegiste ${destinoSeleccionado.nombre}. Precio por día: $${destinoSeleccionado.precioPorDia}`
    );
  } else {
    alert("Codigo no valido. Intenta de nuevo.");
  }
  return destinoSeleccionado
}

function pedirDias() {
  let cantidadDeDias = Number(prompt("¿Cuántos días desea viajar?").trim());
  while (isNaN(cantidadDeDias) || cantidadDeDias <= 0) {
    alert("Por favor, ingrese un número válido de días (mayor a 0).");
    cantidadDeDias = Number(prompt("¿Cuántos días desea viajar?").trim());
    console.log(`El usuario eligió ${cantidadDeDias} días`);
  }
  return cantidadDeDias;
}

function calcularPrecio (destino, dias){
    const subtotal = destino.precioPorDia * dias; 
    const impuesto = subtotal * IVA; 
    const total = subtotal + impuesto; 
    return {subtotal, impuesto, total};
}

const destino = pedirDestino ();
const dias = pedirDias ();

if (destino && dias) {
  const resultado = calcularPrecio(destino, dias);
  alert(
    `Tu viaje a ${destino.nombre} por ${dias} días cuesta:\n` +
    `Subtotal: $${resultado.subtotal}\n` +
    `IVA (21%): $${resultado.impuesto}\n` +
    `Total final: $${resultado.total}`
  );
} else {
  alert("Simulación cancelada o datos inválidos.");
}




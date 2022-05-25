/* Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas */
let cant = document.getElementById("cantidad");

function arreglo_nombres(cantidad: number) {
  let nombre: string = "";
  let nombres: string[] = [];
  for (let i = 0; i < cantidad; i++) {
    nombre = prompt("Ingrese nombre");
    nombres[i] = nombre;
  }
  console.log(nombres);
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  arreglo_nombres(cantidad);
});

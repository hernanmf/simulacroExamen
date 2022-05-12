let d = document;
let btnComenzar = <HTMLButtonElement>d.getElementById("btnComenzar");
let pAprobacion = <HTMLParagraphElement>d.getElementById("pAprobacion");
let pPromedio = <HTMLParagraphElement>d.getElementById("pPromedio");
let pMayorNota = <HTMLParagraphElement>d.getElementById("pMayorNota");
let pMesMayorNota = <HTMLParagraphElement>d.getElementById("pMesMayorNota");
let pMenorNota = <HTMLParagraphElement>d.getElementById("pMenorNota");
let pMesMenorNota = <HTMLParagraphElement>d.getElementById("pMesMenorNota");

let notasAlumno: number[] = new Array(7, 6, 9, 5, 8, 7, 10, 4, 8);
let mesesNotas: string[] = new Array(
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre"
);

function calculaPromedio(notas: number[], l: number): number {
  let sumador: number = 0;
  for (let i = 0; i <= l - 1; i++) {
    sumador += notas[i];
  }
  return sumador / l;
}

function posicionMesNotaMayor(notas: number[]): number {
  let notaMayor: number = notas[0];
  let mesNota: number = 0;
  for (let i = 1; i <= 8; i++) {
    if (notas[i] > notaMayor) {
      notaMayor = notas[i];
      mesNota = i;
    }
  }
  return mesNota;
}

function posicionMesNotaMenor(notas: number[]): number {
  let notaMenor: number = notas[0];
  let mesNota: number = 0;
  for (let i = 1; i <= 8; i++) {
    if (notas[i] < notaMenor) {
      notaMenor = notas[i];
      mesNota = i;
    }
  }
  return mesNota;
}

btnComenzar.addEventListener("click", () => {
  let promedio: Number = calculaPromedio(notasAlumno, 9);
  let posNotaMayor: Number = posicionMesNotaMayor(notasAlumno);
  let posNotaMenor: Number = posicionMesNotaMenor(notasAlumno);
  if (promedio >= 6) {
    pAprobacion.innerHTML = "Informe final: Aprobado";
    console.log("Informe final: Aprobado");
  } else {
    pAprobacion.innerHTML = "Informe final: Desaprobado";
    console.log("Informe final: Desaprobado");
  }

  pPromedio.innerHTML = "Promedio: " + promedio;
  console.log("Promedio: " + promedio);

  pMayorNota.innerHTML = "Mayor Nota: " + notasAlumno[posNotaMayor];
  pMesMayorNota.innerHTML = "Mes: " + mesesNotas[posNotaMayor];
  console.log(
    "Mayor Nota: " +
      notasAlumno[posNotaMayor] +
      " en el mes de " +
      mesesNotas[posNotaMayor]
  );

  pMenorNota.innerHTML = "Menor Nota: " + notasAlumno[posNotaMenor];
  pMesMenorNota.innerHTML = "Mes: " + mesesNotas[posNotaMenor];
  console.log(
    "Menor Nota: " +
      notasAlumno[posNotaMenor] +
      " en el mes de " +
      mesesNotas[posNotaMenor]
  );
});

//import { calculaPromedio } from "Ejercicio2.ts";
let d = document;
let btnComenzar = <HTMLButtonElement>d.getElementById("btnComenzar");
let pMayorPromedio = <HTMLParagraphElement>d.getElementById("pMayorPromedio");
let pComisionMayorPromedio = <HTMLParagraphElement>(
  d.getElementById("pComisionMayorPromedio")
);
let pMenorPromedio = <HTMLParagraphElement>d.getElementById("pMenorPromedio");
let pComisionMenorPromedio = <HTMLParagraphElement>(
  d.getElementById("pComisionMenorPromedio")
);
let pDesaprobadosComisionA = <HTMLParagraphElement>(
  d.getElementById("pDesaprobadosComisionA")
);
let pDesaprobadosComisionB = <HTMLParagraphElement>(
  d.getElementById("pDesaprobadosComisionB")
);
let pDesaprobadosComisionC = <HTMLParagraphElement>(
  d.getElementById("pDesaprobadosComisionC")
);
let pMenorNotaComisionA = <HTMLParagraphElement>(
  d.getElementById("pMenorNotaComisionA")
);
let pMenorNotaComisionB = <HTMLParagraphElement>(
  d.getElementById("pMenorNotaComisionB")
);
let pMenorNotaComisionC = <HTMLParagraphElement>(
  d.getElementById("pMenorNotaComisionC")
);

let notasComisionA: number[] = new Array(8, 5, 7, 10, 9, 2, 4, 8, 6, 8);
let notasComisionB: number[] = new Array(3, 6, 8, 5, 4, 7, 7, 4, 6, 8);
let notasComisionC: number[] = new Array(7, 6, 9, 8, 9, 8, 5, 7, 10, 9);

function menorNota(notas: number[]): number {
  let notaMenor: number = notas[0];
  for (let i = 1; i <= 9; i++) {
    if (notas[i] < notaMenor) {
      notaMenor = notas[i];
    }
  }
  return notaMenor;
}

function calculaPromedio(notas: number[], l: number): number {
  let sumador: number = 0;
  for (let i = 0; i <= l - 1; i++) {
    sumador += notas[i];
  }
  return sumador / l;
}

function cuentaDesaprobados(notas: number[]): number {
  let contador: number = 0;
  for (let i = 0; i <= 9; i++) {
    if (notas[i] < 6) {
      contador++;
    }
  }
  return contador;
}

btnComenzar.addEventListener("click", () => {
  let desaprobadosA: number = cuentaDesaprobados(notasComisionA);
  pDesaprobadosComisionA.innerHTML =
    "Desaprobados Comision A: " + desaprobadosA;
  console.log("Desaprobados Comision A: " + desaprobadosA);

  let desaprobadosB: number = cuentaDesaprobados(notasComisionB);
  pDesaprobadosComisionB.innerHTML =
    "Desaprobados Comision B: " + desaprobadosB;
  console.log("Desaprobados Comision B: " + desaprobadosB);

  let desaprobadosC: number = cuentaDesaprobados(notasComisionC);
  pDesaprobadosComisionC.innerHTML =
    "Desaprobados Comision C: " + desaprobadosC;
  console.log("Desaprobados Comision C: " + desaprobadosC);

  let menorA: number = menorNota(notasComisionA);
  pMenorNotaComisionA.innerHTML = "Menor Nota Comision A: " + menorA;
  console.log("Menor Nota Comision A: " + menorA);

  let menorB: number = menorNota(notasComisionB);
  pMenorNotaComisionB.innerHTML = "Menor Nota Comision B: " + menorB;
  console.log("Menor Nota Comision B: " + menorB);

  let menorC: number = menorNota(notasComisionC);
  pMenorNotaComisionC.innerHTML = "Menor Nota Comision C: " + menorC;
  console.log("Menor Nota Comision C: " + menorC);

  let promCA: number = calculaPromedio(notasComisionA, 10);
  let promCB: number = calculaPromedio(notasComisionB, 10);
  let promCC: number = calculaPromedio(notasComisionC, 10);
  switch (true) {
    case promCA >= promCB && promCA >= promCC:
      pMayorPromedio.innerHTML = "Mayor promedio: " + promCA;
      pComisionMayorPromedio.innerHTML = "Comision: A";
      console.log("Mayor promedio: " + promCA);
      break;
    case promCB >= promCA && promCB >= promCC:
      pMayorPromedio.innerHTML = "Mayor promedio: " + promCB;
      pComisionMayorPromedio.innerHTML = "Comision: B";
      console.log("Mayor promedio: " + promCB);
      break;
    case promCC >= promCA && promCC >= promCA:
      pMayorPromedio.innerHTML = "Mayor promedio: " + promCC;
      pComisionMayorPromedio.innerHTML = "Comision: C";
      console.log("Mayor promedio: " + promCC);
      break;
  }
  switch (true) {
    case promCA <= promCB && promCA <= promCC:
      pMenorPromedio.innerHTML = "Menor promedio: " + promCA;
      pComisionMenorPromedio.innerHTML = "Comision: A";
      console.log("Menor promedio: " + promCA);
      break;
    case promCB <= promCA && promCB <= promCC:
      pMenorPromedio.innerHTML = "Menor promedio: " + promCB;
      pComisionMenorPromedio.innerHTML = "Comision: B";
      console.log("Menor promedio: " + promCB);
      break;
    case promCC <= promCA && promCC <= promCA:
      pMenorPromedio.innerHTML = "Menor promedio: " + promCC;
      pComisionMenorPromedio.innerHTML = "Comision: C";
      console.log("Menor promedio: " + promCC);
      break;
  }
});

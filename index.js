import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js';
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from './src/utils/transformUtils.js';
import { combinarDosArrays, combinarNArrays } from './src/apareo.js';

// leo los 4 archivos a memoria
const contenidoSetA = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
const contenidoSetB = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
const contenidoImpares = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
const contenidoPares = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');

// preparo los 4 arrays a partir de los archivo leidos
const setA = transformarStringEnArrayDeNumeros(contenidoSetA, ',');
const setB = transformarStringEnArrayDeNumeros(contenidoSetB, ',');
const impares = transformarStringEnArrayDeNumeros(contenidoImpares, ',');
const pares = transformarStringEnArrayDeNumeros(contenidoPares, ',');

// combino los primeros dos arrays
const combinado1 = combinarDosArrays(setA, setB);

// combino los cuatro arrays
const combinado2 = combinarNArrays([setA, setB, impares, pares]);

// escribo los resultados en los archivos de salida
escribirTextoEnArchivo('./out/combinado.out', transformarArrayDeNumerosAUnSoloString(combinado1, ','), true);
escribirTextoEnArchivo('./out/combinado2.out', transformarArrayDeNumerosAUnSoloString(combinado2, ','), true);

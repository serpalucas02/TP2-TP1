import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js';
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from './src/utils/transformUtils.js';
import { combinarDosArrays, combinarNArrays } from './src/apareo.js';
import assert from 'assert';

// Prueba leerArchivoComoString
const contenidoTest = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
assert.strictEqual(typeof contenidoTest, 'string', 'El contenido debe ser un string');

// Prueba escribirTextoEnArchivo
const testRuta = './test.out';
const testTexto = 'Este es un texto de prueba.';
escribirTextoEnArchivo(testRuta, testTexto, true);
const contenidoEscrito = leerArchivoComoString(testRuta);
assert.strictEqual(contenidoEscrito, testTexto, 'El contenido escrito debe coincidir con el texto proporcionado');

// Prueba transformarStringEnArrayDeNumeros
const arrayNumeros = transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', ' | ');
assert.deepStrictEqual(arrayNumeros, [123, 456, 789, 10], 'El array de números no es el esperado');

// Prueba transformarArrayDeNumerosAUnSoloString
const stringNumeros = transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ',');
assert.strictEqual(stringNumeros, '123,456,789,10', 'El string generado no es el esperado');

// Prueba combinarDosArrays
const combinado = combinarDosArrays([1, 5, 10], [2, 3, 8, 11]);
assert.deepStrictEqual(combinado, [1, 2, 3, 5, 8, 10, 11], 'El array combinado no es el esperado');

// Prueba combinarNArrays
const combinadoMultiple = combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]);
assert.deepStrictEqual(combinadoMultiple, [1, 2, 3, 4, 6, 7, 10, 13, 15, 16], 'El array combinado múltiple no es el esperado');

console.log('Todas las pruebas pasaron correctamente');

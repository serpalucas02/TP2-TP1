/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {
    const conjunto = new Set([...arrA, ...arrB]);
    return [...conjunto].sort((a, b) => a - b);
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
export function combinarNArrays(arrs) {
    const conjunto = new Set(arrs.flat());
    return [...conjunto].sort((a, b) => a - b);
}

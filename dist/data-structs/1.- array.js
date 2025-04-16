"use strict";
// Antes de:
// E.
const nums = [1, 2, 3];
const words = ['uno', 'dos', 'tres'];
const readonlyNums = [1, 2, 3]; // Tupla
const productos = [
    { id: 1, nombre: 'Laptop' },
    { id: 2, nombre: 'Teclado' },
];
//Métodos en los arreglos (para generar sub arreglos o operaciones)
const cuadrados = [1, 2, 3, 4].map(n => n ** 2); // [1, 4, 9, 16]
const pares = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
const suma = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0); // 10
//Destructuring y spread
const [a, b, ...rest] = [10, 20, 30, 40];
console.log(a); // 10
console.log(rest); // [30, 40]
const merged = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]
//Busqueda en arreglos
const nombres = ['Ana', 'Luis', 'Carlos'];
nombres.includes('Luis'); // true
nombres.indexOf('Carlos'); // 2
nombres.find(name => name.startsWith('C')); // 'Carlos'
nombres.findIndex(name => name.length > 4); // 2
//Validaciones:
const edades = [18, 22, 19];
const todosMayores = edades.every(e => e >= 18); // true
const hayMenores = edades.some(e => e < 18); // false

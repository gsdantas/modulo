// importando as funçao dos modulos

import{ somar } from './somar.mjs';
import{ multiplicar } from './multiplicar.mjs';
import{ subtrair } from './subtracao.mjs';
import{ dividir } from './divi-sao.mjs';
import{ potencia } from './potenciaçao.mjs';

// utilizando as fumçoes importadas
const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1,numero2);
const resultadoSubtracao = subtrair(numero1,numero2);
const resultadoDivisao = dividir(numero1, numero2);
const resultadoPotencia = potencia(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisao}`);
console.log(`${numero1} ^ ${numero2} = ${resultadoPotencia}`);
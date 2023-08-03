import { uniq } from 'lodash';
import { arrayNumeros, arrayLetras } from './array';

const arrayNumUnico = uniq(arrayNumeros);
const arrayLetUnica = uniq(arrayLetras);

console.log(arrayNumUnico);
console.log(arrayLetUnica);

"use strict";
// <!-- You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits. -->
// Esta solución no va a funcionar muy bien en sumas más altas, con valores más largos.
function plusOne(nums) {
    let residuo = 1;
    for (let i = nums.length - 1; i > -1; i--) {
        let intento = nums[i] + residuo;
        if (intento < 10) {
            nums[i] = intento;
            residuo = 0;
            break;
        }
        else {
            nums[i] = intento - 10;
            residuo = 1; // Se asume que no se puede obtener un pendiente más grande que 1
            if (i == 0) {
                nums.unshift(residuo);
            }
        }
    }
    return nums;
}
;
function problem66() {
    let bigInt = [9];
    console.log(plusOne(bigInt));
}
problem66();

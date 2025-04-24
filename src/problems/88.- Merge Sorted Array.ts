// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non - decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

//Aún pendiente revisar más a detalle, no me quedé contento con la solución

function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let resultSize: number = m + n;

    let counterA: number = 0;
    let counterB: number = 0;

    if (m == 0) {
        nums1.splice(0, nums1.length, ...nums2); 
        return;
    }

    if (n == 0) {
        return;
    }
 
    var final: number[] = []; 

    while (resultSize > 0) {

        if (nums1[counterA] < nums2[counterB]  && counterA < m) {
            final.push(nums1[counterA]);
            
            nums1[ ( m + n) - resultSize] = nums1[counterA];
            counterA++;
        } else if (counterB < n) { //verificación de que el escenario tampoco se ocurra? (Para escenarios doned .length != n)
            nums1[ ( m + n) - resultSize] = nums2[counterB];
            
            final.push(nums2[counterB]);
            counterB++;
        } else {
            nums1[ ( m + n) - resultSize] = nums1[counterA];
            final.push(nums1[counterA]);
            counterA++;
        }

        resultSize--;
    }

    console.log(final);

    
    //nums1.splice(0, nums1.length, ...final); 

};

function tryToAdd (final: number[], counterA: number, counterB: number, sizeA: number, sizeB: number) {

}

function problem88() {

    let arrayA: number[] = [1,2,3,0,0,0];
    let arrayB: number[] = [2,5,6];

    merge(arrayA, 3, arrayB, 3); 

    console.log(arrayA);
}

problem88();
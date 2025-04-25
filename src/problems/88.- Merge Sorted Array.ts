// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non - decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

//Aún pendiente revisar más a detalle, no me quedé contento con la solución

function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let pointer1 = m - 1;
    let pointer2 = n - 1;
 
 

    
    for (let i = m + n - 1; i >= 0; i-- ) {
        console.log(i);

        if (pointer2 == -1) {
            break;
        }

        if (nums1[pointer1] > nums2[pointer2]) {
            nums1[i] = nums1[pointer1];
            pointer1--;
        } else {
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
    }
};

function problem88() {

    let arrayA: number[] = [0];
    let arrayB: number[] = [1];

    merge(arrayA, 0, arrayB, 1); 

    console.log(arrayA);
}

problem88();
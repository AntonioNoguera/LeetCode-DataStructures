// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


//Al parecer inicializar el arreglo en 1, fue una pesima decisión de tiempo de ejecución. 
// 23 MS -> 3.66 

function generate(numRows: number): number[][] {

    let result: number[][] = [[1]];

    if (numRows == 1) {
        return result;
    }

    for (let i = 1; i < numRows; i++) {

        let currentLevel: number[] = [];
        console.log(i);
        console.log(result[i-1]);

        for (let j = 0; j <= i ; j++) {
            if (j == 0 || j == i) {
                currentLevel.push(1);
            } else {
                currentLevel.push(result[i - 1][j - 1] + result[i - 1][j]);
            }

        }

        result.push(currentLevel);
    }

    console.log(result);

    return result;
};

function problem118() {
    let numOfRows = 5;

    generate(numOfRows = numOfRows);
}

problem118();
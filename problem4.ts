// Sample test case :
// Input : 1 2 3
// output: no solusion

// input : 6 6 14
// output: 1 2 3 
    
function simpleEquations(a: number, b:number, c: number): any {
        
    for (let x = 1; x <= 100; x++) {
        for (let y = 1; y <= 100; y++) {
            for (let z = 1; z <= 100; z++) {
                if (x + y + z === a && x * y * z === b && x * x + y * y + z * z === c) {
                    return [x, y, z]
                }            
            }
        }
    }

    return 'No Solution'
    
    
}

console.log(simpleEquations(1, 2, 3));
console.log(simpleEquations(6, 6, 14));
console.log(simpleEquations(7, 8, 21));

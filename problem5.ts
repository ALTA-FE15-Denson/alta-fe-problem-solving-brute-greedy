// simple test Case:
// input : [5,4], [7,8,4]
// output : 11

// input : [5,10], [5]
// output: 'knights fall'

// input : [7,2], [4,3,1,2]
// output: 'knight fall'

// input: [7,2], [2,1,8,5]
// output: 10


function dragonOfLoowater(dragonHead: number[], knightHeight: number[]): any {
    dragonHead.sort((a, b) => a - b);
    knightHeight.sort((a, b) => a - b);
    let totalGold = 0;
    let knightIndex = 0;

    for (let i = 0; i < dragonHead.length; i++) {
        while (knightIndex < knightHeight.length && knightHeight[knightIndex] < dragonHead[i]) {
            knightIndex++;
        }

        if (knightIndex >= knightHeight.length) {
            return 'knight fall';
        }

        totalGold += knightHeight[knightIndex];
        knightIndex++;
    }

    return totalGold;
}

console.log(dragonOfLoowater([7, 2], [4, 3, 1,2]));
console.log(dragonOfLoowater([5, 4], [7, 8, 4]));
console.log(dragonOfLoowater([5, 10], [5]));
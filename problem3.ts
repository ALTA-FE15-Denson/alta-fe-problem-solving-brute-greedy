function isArmstrongNumber(num: number): boolean {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;
    
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i])
      
      sum += Math.pow(digit, numDigits);
    }
    
    return sum === num;
  }
  
  // Test cases
  console.log(isArmstrongNumber(153)); // true
//   console.log(isArmstrongNumber(9)); // true
//   console.log(isArmstrongNumber(10)); // false
  
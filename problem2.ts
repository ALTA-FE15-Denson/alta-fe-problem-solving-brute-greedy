function decryptAtbash(cipherText: string): string{
    let plain = 'abcdefghijklmnopqrstuvwxyz'
    let cipher = 'zyxwvutsrqponmlkjihgfedcba'

    let realCipher = ''
    let result = ''

    for(let i = 0; i <cipherText.length; i++){
        if(plain.includes(cipherText[i].toLocaleLowerCase())){
            realCipher += cipherText[i]
        }
    }


    for(let j = 0; j<realCipher.length; j++){
        let plainReal = plain.indexOf(realCipher[j].toLocaleLowerCase())
        result += cipher.charAt(plainReal)
    }

    return result
    
}

console.log(decryptAtbash('Olivn rkhfn wloli hrg znvg'));
console.log(decryptAtbash("Svool dliow! R'n ovzimrmt gbkvhxirkg!"));
console.log(decryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt"));

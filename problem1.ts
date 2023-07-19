function acronym(phasa: string): string {
    let text = phasa.split(" ");
    let word = ''
    
    for(let i = 0; i<text.length; i++){
        word += text[i].charAt(0).toUpperCase();  
    }
    
    return word;
}

console.log(acronym("Portable Network Graphics"));
console.log(acronym("Correct me if I'm wrong"));
console.log(acronym("Thanks god It's Friday"));

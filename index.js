function introduction(Name){
    return `Hi, my name is ${Name}.`;
}    
console.log (introduction("Larry"))

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log (introductionWithLanguage("Larry", "javascript"))

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log (introductionWithLanguageOptional("larry"))
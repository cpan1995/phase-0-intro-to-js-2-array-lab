// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(n){
    return cats.push(n);
}

function destructivelyPrependCat(n){
    return cats.unshift(n);
}

function destructivelyRemoveLastCat(n){
    return cats.pop(n);
}

function destructivelyRemoveFirstCat(n){
    return cats.shift(n);
}

function appendCat(n){
    const newCats = [...cats, n];
    return newCats;
}

function prependCat(n){
    const newCats = [n, ...cats];
    return newCats;
}

function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name) {
    cats.push(name);
}
function destructivelyPrependCat (name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat (name) {
    cats.pop();
}
function destructivelyRemoveFirstCat (name) {
    cats.shift();
}

function appendCat (name) {
    const catss = cats.slice();
    catss.push(name);
    return catss;
}
    function prependCat (name) {
    const catss = cats.slice();
    catss.unshift(name);
    return catss;
         
}
function removeLastCat (name) {
    const catss = cats.slice();
    catss.pop();
    return catss;
}
function removeFirstCat (name) {
    const catss = cats.slice();
    catss.shift();
    return catss;
}
function *generatorFunction()
{
    console.log('Generator function is running');

    let x=5;
    yield x;

    x++;
    y= yield x;
    return x+y;
}

let iterator= generatorFunction();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next(4));

console.log('All done!')

/*Output:
    node .\generator_function.js
    Generator function is running
    { value: 5, done: false }
    { value: 6, done: false }
    { value: 10, done: true }
    All done!
*/
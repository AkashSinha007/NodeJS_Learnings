
console.log('Starting the main thread');

console.log('Getting Started');
wasteTime(2000);
console.log('In the middle');
wasteTime(2000);
console.log('All done');

console.log('Still in the main thread');

function wasteTime(delay)
{
    const end = Date.now()+ delay;
    while(Date.now()<end){}
}
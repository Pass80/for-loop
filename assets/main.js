for (let i = 1; i < 11; i++) {
    console.log('Hallo World ' + i);
}

console.log('==============');

const numArray = [];

for (let i = 0; i < 11; i++) {
    numArray.push(i);
}
console.log(numArray);

console.log('==============');
let counter = 1;
while (counter < 11) {
    console.log('Hallo World ' + counter);
    counter += 1;
}

console.log('==============');

const names = [
    'Freddy',
    'Steffen',
    'Finn',
    'Julia',
    'Franzi',
    'Christian',
    'Sergio',
];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('==============');

const retArray = [];

for (let i = 1; i < 101; i++) {
    retArray.push(`image_${i}.jpg`);
}
console.log(retArray);

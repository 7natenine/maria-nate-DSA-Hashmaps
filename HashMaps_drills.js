hashMap = require('./index')


function main(){
    let lotr = new hashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATION = 3;
    lotr.set('Hobbit','Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard','Gandolf');
    lotr.set('Human','Aragon');
    lotr.set('Elf','Legolas');
    lotr.set('Maiar','The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer','Gollum');
    lotr.set('LadyOfLight','Galadriel');
    lotr.set('HalfElven','Arwen');
    lotr.set('Ent','Treebeard');

    // console.log(lotr);
    // console.log(lotr.get('Hobbit'));
    // console.log(lotr.get('Maiar'))
}

main();

// #1 : 
// Hobbit: Frodo and for Maiar: Sauron.
// The discrepency is that it only shows the second value, and the first value, 
// ignoring it. 
// 
// The capacity only 8, leaving number 9 as undefined. 


// #2 
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new hashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new hashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1)); 
    console.log(map2.get(str3)); 
}
WhatDoesThisDo();

// String 1 is mapped to 10 but then is mapped to 20 and str 2 is 20, but then mapped to 10. 


//#3 
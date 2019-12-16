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

}

// main();

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new hashMap(); //create a new hashmap
    map1.set(str1,10); //{'Hello World.': 10}
    map1.set(str2,20); //'Hello World' to 20
    let map2 = new hashMap(); //create another hashmap
    let str3 = str1; //set str3 to 'Hello World.';
    let str4 = str2; //set str4 to 'Hello World.';
    map2.set(str3,20); //set value of 'Hello World.' to 20
    map2.set(str4,10); //change the value of 'Hello World.' to 10
  
    console.log(map1.get(str1)); //returns 20
    console.log(map2.get(str3));//returns 10
  };

//   WhatDoesThisDo();

/** 
 * #3 Demonstrating understanding of Hash Maps
 * keys: 10, 22, 31, 41, 15, 28, 17, 88, 59
 * k % m 
 * result = 10, 0, 9, 8, 4, 6, 6, 0, 4
 * 
 * keys: 5, 28, 19, 15, 20, 33, 12, 17, 10
 * k % m 
 * result = 5, 1, 1, 5, 2, 6, 3, 8, 1 
 * */ 

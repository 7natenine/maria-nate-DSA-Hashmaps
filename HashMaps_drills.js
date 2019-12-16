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







 //#4. 
 function duplicates(arr) {
  
    // our hash table to store each element
    // in the array as we pass through it
    let  hashTable = [];
    
    // store duplicates
    let dups = [];
    
    // check each element in the array
    for (let i = 0; i < arr.length; i++) {
      
      // if element does not exist in hash table
      // then insert it
      if (hashTable[arr[i].toString()] === undefined) {
        hashTable[arr[i].toString()] = true;
      } 
      
      // if element does exist in hash table
      // then we know it is a duplicate
      else { dups.push(arr[i]); }
      
    }
    
    return hashTable;
    
  }

console.log (duplicates('google')); 


//#5. 

// function Palindrome(str) {
   
//     for (let i = str.length; i>0; i--) {

//         if(str === str.split('').reverse().join('')){
//             return 'palindrome!'

//         }
//         else return 'not a palindrome'
//     }
// }

// console.log(Palindrome('dad'))


const palindrome = (string) => {
    const obj = {};
    let odd = 0;
    for (let i = 0; i<string.length; i++) {
      let word = string[i];
      if (obj[word] === undefined) {
        obj[word] = 1;
      }
      else {
        obj[word]++;
      }
    } 
    for (let key in obj) {
      if (obj[key] % 2 !== 0) {
        odd++;
      }
      if (odd > 1) {
        return false;
      }
    }
    return true;
  }

  console.log(palindrome('north')) // false
  console.log(palindrome('acecarr'))//true




  //#6. Write an algorithm to group a list of words into anagrams.
  // For example, if the input was ['east', 'cars', 'acre', 'arcs', 
  //'teas', 'eats', 'race'], the output should be: [['east', 'teas', 
  //'eats'], ['cars', 'arcs'], ['acre', 'race']].

  function uniform(str) {
    return str.split('').sort().join('');
};

console.log(uniform('east')) // aest

  let groupAnagrams = function(strs) {
    let map = new Map();
    for (let i of strs) {
        const alpha = uniform(i);
        let list = map.get(alpha) || [];
        list.push(i);
        map.set(alpha, list);
    }

    //Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
    return Array.from(map.values());
};

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs','teas', 'eats', 'race']))




  //#7
  const str = ['east', 'cars', 'acre', 'arcs','teas', 'eats', 'race']
  function anagramGroup(str) {
      // create an empty hash map 
    let hashMap = {};

    //loop through each string and split each string into an array of letters, alphabetize 
    // each array and sort the letters in each array 
    // i.e: 
    // east will be  [a,e,s,t] , we save this into  a varaiable called letter 
    str.forEach( str => {
        let letter = str.split('').sort();
    // Now we use a teranry function to push the letters into a hash or if the hash is already 
    // there, we push the string into the value of the hash map key
        if(hashMap[letter]){
            hashMap[letter].push(str)
        } 
        // push value into the hash 
        else hashMap[letter] = [str] 
    })  

    //NOW : hash should look like this : 
    // {
    //     'a,e,t' : ['eat', 'tea', 'ate'],
    //     'a,n,t' : ['tan', 'nat'],
    //     'a,b,t' : ['bat']
    //     }

    // This formats the output so it can return 3 arrays of values only 
    // hence: put the keys into an array 
    // map over the keys, but return the values only 
     const keys = Object.keys(hashMap);
     const values = keys.map(
         function(x) {
             return hashMap[x]
         }
     )
     
       return values;    
    }
    // console.log(anagramGroup(str));
  



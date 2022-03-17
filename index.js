//Dependencies
import fetch from 'node-fetch';
import fs from 'fs';
import { error } from 'console';


//Coding Exercise//
//In this exercise I will be demonstrating using callback functions, promises and asyncronous code in Javascript.


//Callback Functions
setTimeout( () => {
    console.log('This is a callback function that will run after all of the other functions in this file run!')
}, 3000)


//Promises
const action = new Promise ((resolve, reject) => {
    let name = 'nick'
    if (name = 'nick') {
        resolve();
    } else {
        reject();
    }
})

action
    .then( () => {console.log('Great Work Your Promise is Working')})
    .catch(() => {console.log('terrible')})


// Utilizing the File System (fs)
fs.readFile('./text.txt', {encoding: 'utf-8'}, (err, data) => {
    console.log(data);
})


// Utilizing fs promises
fs.promises.readFile('./text.txt', {encoding:'utf-8'})
    .then((data) => {console.log(data)})
    .catch((err) => {console.err(err)})


// Utilizing Fetch
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((data) =>  console.log(data) )
    .catch((error) =>  console.error(error) )


// Utilizing Async/Await and Promises
const loadfile = async () => {
    const data = await fs.promises.readFile('./text.txt', {encoding: 'utf-8'})
    console.log(data)
}

loadfile();


//Async Await and Fetch 
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data =  await res.json();
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

fetchPokemon(2);
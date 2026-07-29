//callback example(1)
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() { 

    console.log('Goodbye!');
}

greet('Alice', sayGoodbye); 

//Callback setTimeout(2)
function greetWithDelay(name, callback) {
    console.log('Hello ' + name);
    setTimeout(callback, 2000); 
}

greetWithDelay('Bob', sayGoodbye);



//Callback anonymous function(3)
greet('Charlie', function() {
    console.log('Goodbye from anonymous function!');
});


//Callback with parameters(4)
function greetWithParameters(name, callback) {
    console.log('Hello ' + name);
    callback(name);
}

greetWithParameters('David', function(name) {
    console.log('Goodbye ' + name + ' from callback with parameters!');
});

//async & await example(5)
async function fetchData() {
    try {   

        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


//error handling with async & await(6)

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

  


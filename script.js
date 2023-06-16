class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Create instances and call methods
const animal = new Animal("Unknown Species");
const cat = new Cat("Felis catus");
const dog = new Dog("Canis lupus familiaris");

animal.makeSound();
cat.makeSound();
cat.purr();
dog.makeSound();
dog.bark();

// Display output
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
  <p>Animal:</p>
  <p>Species: ${animal.species}</p>
  <br>
  <p>Cat:</p>
  <p>Species: ${cat.species}</p>
  <br>
  <p>Dog:</p>
  <p>Species: ${dog.species}</p>
`;

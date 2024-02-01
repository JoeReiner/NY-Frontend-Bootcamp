// Objects

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

    greet: function (){
        console.log('hello, my name is', this.firstname, 'Nice to meet you.');
    }
};

// Accessing Object Properties

console.log(person.lastName);
console.log(person.age);

// Modifying Object Properties
person.lastName = 'Smith';
console.log(person.lastName);

// Accessing Object Methods
person.greet();

// Adding new Propertiues to the Object
person.nationality = 'American'
console.log(person.nationality);

// Addinbg New methoids to the Object
person.introduce = function () {
    // Template Literals
    console.log(`I am ${this.firstName} ${this.lastname}. I am ${this.age}.`);
};
person.introduce();

// Nesting Objects
const address = {
    street:'123 Main St',
    city:'New York',
    country: 'USA'
}

person.location = address
console.log(person.location.street);

// Object Destructuring 
const { firstName, lastName, age } = person;
console.log(firstName);

console.log(person.hobbies);
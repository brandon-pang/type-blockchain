interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Brandon Pang",
    age: 34,
    gender: "Male"
};

const sayHi = (person: Human): string => {
    return `Hi ${person.name}, I am ${person.age} years old ${person.gender}`

}
console.log(sayHi(person));

export { };
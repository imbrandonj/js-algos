// Looking up properties in an array of objects

/*
A lookUpProfile function that takes name and a property (prop) as arguments.
The function checks if (name) is an actual contact's firstName and the given (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then
return the string "No such contact"
If prop does not correspond to any valid properties of a contact found to match name then
return the string "No such property"
*/

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    let i = 0;
    let string = ""
    do {
        if (contacts[i].firstName != name) {
            string = "No such contact";
        } else if (!contacts[i].hasOwnProperty(prop)) {
            string = "No such property";
            return string;
        } else if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
    } while (++i < contacts.length);

    return string;
}

console.log(lookUpProfile("Kristian", "lastName"))
console.log(lookUpProfile("Sherlock", "likes"))
console.log(lookUpProfile("Harry", "likes"))
console.log(lookUpProfile("Bob", "number"))
console.log(lookUpProfile("Bob", "potato"))
console.log(lookUpProfile("Akira", "address"))
console.log(lookUpProfile("Akira", "address"));
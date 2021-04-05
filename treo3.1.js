function describePerson() {
    let person = {
        name: "Loi",
        age: 18,
        company: "CoderSchool"
    }


    return {
        name: person.name,
        age: person.age,
        company: person.company,
    };
    }
    
    console.log(describePerson());


    // Destructuring

function getAverage() {
let obj = { x: 3.6, y: 7.8, z: 4.3 };
// CHANGE BELOW
// const {x:a, y:b, z:c} = obj;
const {x, y, z} = obj
return Math.floor((x + y + z) / 3.0);
// return Math.floor((a + b + c) /3 )
}

console.log(getAverage());


function getAddress() {
let coderschool = {
    city: "HCMC",
    country: "Vietnam",
    address: {
        number: 12,
        street: "Ton Dan",
        district: "4",
    },
    };
// CHANGE BELOW
    let {city, country, address: {number, street, district}} = coderschool;
return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
}

console.log(getAddress())


function getNestedElements() {
    const food = [
        ["carrots", "beans", "peas", "lettuce"],
        ["apples", "mangos", "oranges"],
        ["cookies", "cake", "pizza", "chocolate"],
    ];
    // CHANGE BELOW
    // const carrots = food[0][0];
    // const cookies = food[2][0];
    // const mangos = food[1][1];
    // CHANGE ABOVE

    const [[carrots], [net, mangos],  [cookies]] = food

    
        return { carrots, cookies, mangos };
    }

    console.log(getNestedElements())

function getElements() {
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// CHANGE BELOW
// const first = arr[0];
// const third = arr[2];
// const fourth = arr[4];
// CHANGE ABOVE
const [first, ner, third, fourth] = arr
    return { first, third, fourth };
}

console.log(getElements())




// Rest and Spread
function restParameters(first, ...rest) {

return rest[0] === 1 && rest[1] === 2;
}

console.log(restParameters(2,1,2));


function ontoAnObject() {
const array = [1, 2, 3, 4, 5, 6];
const object = {};
// CHANGE BELOW
// object.one = array[0];
// object.two = array[1];
// object.three = array[2];
// object.rest = array.slice(3);
// CHANGE ABOVE
[object.one, object.two, object.three, ...object.rest] = array;
    return object;
}

console.log(ontoAnObject());


function findTheMax() {
const arr1 = [1, 7, 2, 4];
const arr2 = [1, 9, 5, 8];
return  Math.max(...arr1, ...arr2)  ;
}


console.log(findTheMax());


function concatenateArrays() {
const arr1 = [0, 1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const result =[...arr1, ...arr2, ...arr3];
// let result = [];
// result = result.concat(arr1, arr2, arr3)
return result;
}

console.log(concatenateArrays());


function mergeObjects() {
// what does this return?
const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
        e: "e from obj1",
        f: "f from obj1",
    },
    };
    const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
        g: "g from obj2",
        h: "h from obj2",
    },
};
const result = { ...obj1, ...obj2 };
return (
    result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g ===  "g from obj2" &&
    result.d.h === "h from obj2"
    );
}
console.log(mergeObjects())

// Arrow functions

multiArgument = () => {
    // CHANGE BELOW
    const divide = (a, b) =>  a / b;
    return divide(40, 10);
}

console.log(multiArgument())

spreadWithArrow = () => {
    // CHANGE BELOW
    const asArray = (...args)  =>  args;
    return asArray(1, 2, 3, 4);
};

console.log(spreadWithArrow())


withObject = () => {
    // CHANGE BELOW
    const getObject = (favoriteCandy) => ({ favoriteCandy });
        

    return getObject("twix");

};

console.log(withObject())

withMultiLineExpression = () => {
    // CHANGE BELOW
    const getString =  (name) =>  `Hello there ${name}. How are you doing today. `;
    return getString("Ryan");
}

console.log(withMultiLineExpression())

curryAdd = () => {
    // CHANGE BELOW
    curryAddition = (a) => (b)  => (c) =>  a + b + c;
    return curryAddition(9)(3)(5);
};
    
console.log(curryAdd())
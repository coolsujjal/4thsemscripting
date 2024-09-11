//   9. string capitalize using map

let str = ["sujjal","sujal","sushant", "khadka"];

let cap = str.map((val)=> {
    return val.toUpperCase();
})

console.log(cap);





// 10 //array of objects of book

let books = [
    {
        title: "Book1",
        author: "Sujjal"
    },
    {
        title: "Book2",
        author: "Sujjal2"
    },
    {
        title: "Book3",
        author: "Sujjal3"
    },
    {
        title: "Book4",
        author: "Sujjal4"
    },
    {
        title: "Book5",
        author: "Sujjal5"
    },
];
console.log(books);

let newBooks = books.slice(0, 3);
console.log(newBooks);

books.splice(1,2, {title: "Book2", author: "Sujjal2"});//Delete and Add new object in array
console.log(books);



// 11. sorting 

let str = ["sujjal","sujal","sushant", "khadka"];

str.sort();

console.log(str);






// 12.  Filtering an array of strings
let str = ["sujjal","sujal","sushant", "khadka"];
let newFilteredArray = str.filter(
    (item) => item[0] === "s"
);
console.log(newFilteredArray);






// 13. map to extract ages from object
let students = [
    { name: "John", age: 18 },
    { name: "Jane", age: 20 },
    { name: "Mark", age: 22 },
    { name: "Mary", age: 19 }
];
let ages = students.map(student => student.age);
console.log( ages);

let filAgess = students.filter((val)=>{
    return val.age > 20;
})


console.log(filAgess);
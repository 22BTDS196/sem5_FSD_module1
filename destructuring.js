//destructuring-- multiple variables can have value as one variable
// structuring-- one variable can have multiple values

var marks = [20,30,50] //structuring
var [a,b,c] = marks //destructuring
console.log(a,b,c)

var [x, ,z] = marks
console.log(x,z)

//object
const sem =
{
    sname : "Raj",
    section : "B"
}
console.log(sem.sname) //default method to access

//destructuring an object
let {sname, section} = sem
console.log(sname, section)
//u can use one object in another object; and one array in another array-- spread operator

//for array
set1 = [1,2,3,4,5] //[]-- array;  {} -- object
set2 = [...set1,6,7,8,9,10] //using ... -- spread operator
console.log(set2)

//for object
const engg =
{
    sem : "V",
    branch : "AIML"
}

const sec =
{
    ...engg,
    numberOfStudents : 70
}

console.log(sec)
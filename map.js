const arr = [1,2,3,4,5];

arr.map((items, index) => {
    console.log(items, index);
})

arr.filter((items, index) => {
    console.log(items % 2 == 0 , index);
})  

const filters = arr.filter((items) => {
    return items % 2 == 0 ;
})
console.log(filters);

let promise = new Promise(function (resolve, reject) {
    resolve("Successfull");
    reject("Unsuccessfull");
});

promise
.then((value) => {
    console.log(value);
})
.catch((value) => {
    console.log(value);
});
let course = {
    title : "course A",
    price: 20,
    length: "24 hrs",
    isFree: true,
    sayHello: function() {
        console.log("Suiii!")
    }
}

console.log(course.isFree)
console.log(course["price"])
console.log(course["title"])
console.log(course.length)
course.sayHello()
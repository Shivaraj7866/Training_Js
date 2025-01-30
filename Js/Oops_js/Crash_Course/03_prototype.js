function Book(name,author,year){
    this.name = name;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function (){
    return `${this.name} was written by ${this.author} in the year of ${this.year}`
}

//getAge
Book.prototype.getAge = function(){
    return new Date().getFullYear() - this.year
}

//modify Year
Book.prototype.revise = function (newYear){
    this.year = newYear
    this.revised = true
}

const book1 = new Book("book1","John David",2006)
const book2 = new Book("book2","John Son",2008)

book2.revise(44)

console.log(book2)
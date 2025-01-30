
function Book(name,author,year){
    this.name = name;
    this.author = author;
    this.year = year;

    this.getSummary = function (){
        return `${this.name} was written by ${this.author} in the year of ${this.year}`
    }
}

const book1 = new Book("book1","John David",2006)
const book2 = new Book("book2","John Son",2008)

console.log(book1)
console.log(book2)
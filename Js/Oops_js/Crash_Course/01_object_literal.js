//Object Literals

const book1 = {
    name:"book one",
    author : "John David",
    year : 2008,
    getSummary:function (){
        return `${this.name} was written by ${this.author} in the year of ${this.year}`
    }
}

const book2 = {
    name:"book two",
    author : "John Doe",
    year : 2006,
    getSummary:function (){
        return `${this.name} was written by ${this.author} in the year of ${this.year}`
    }
}

const book3 = {
    name:"book three",
    author : "John  Wick",
    year : 2006,
    getSummary:function (){
        return `${this.name} was written by ${this.author} in the year of ${this.year}`
    }
}

console.log(book3.author)

console.log(book3.getSummary())
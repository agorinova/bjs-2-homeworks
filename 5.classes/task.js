class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;
    }
    
    set state(bookState) {
        if(bookState < 0) {
            this._state = 0;
        } else if (bookState > 100) {
            this._state = 100;
        } else {
            this._state = bookState;
        }
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//let printEditionItem = new PrintEditionItem();
let novelBook = new NovelBook();
let fantasticBook = new FantasticBook();
let detectiveBook = new DetectiveBook();


class Library {
    constructor (){
        this.name = "Библиотека имени Ленина";
        this.books = [];
    }

    addBook(book){
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = null;
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i][type] === value){
                result = this.books[i];
            }
        }
        return result;
    }

    giveBookByName(bookName){
        let result;
        let position = this.books.findIndex((item) => item["name"] !== bookName);
        for(let i = 0; i < this.books.length; i++){
            if(this.name === bookName){
                result = this.books.splice(position, 1)[0];
            } else{
                result = null;
            }
        }
        return result;
    }
}





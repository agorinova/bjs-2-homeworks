class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix(){
        let improvement = this.state * 1.5;
        return improvement;
    }
    
    set state(bookState) {
        if(bookState < 0) {
            this.state = 0;
        } else if (bookState > 100) {
            this.state = 100;
        } else {
            this._state = bookState;
        }
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null, author){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author){
        super(author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author){
        super(author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author){
        super(author);
        this.type = "detective";
    }
}

let printEditionItem = new PrintEditionItem();




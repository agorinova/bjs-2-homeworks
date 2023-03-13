class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
}

let defective = new PrintEditionItem;

defective.fix = function(){
    return state*1.5;
}
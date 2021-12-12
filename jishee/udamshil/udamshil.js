class Media{
    constructor(title){
        this._title = title;
        this._ratings = []
    }
    get title(){
        return this._title
    }
    get ratings(){
        return this._ratings;
    }
    getAverageRating(){
        let sum = this.ratings.reduce((currentSum,rating) => currentSum  + rating,0);
        const len = this.ratings.length;
        return sum/len;
    }
    addRating(rating){
        this.ratings.push(rating);
    }
}
class Book extends Media{
    constructor(author,title,pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
     return this._author;
    }
    get pages(){
        return this._pages;
    }
}
let oneQ84 = new Book('Мүраками ' ,'1Q84 I ' , 409);
oneQ84.addRating(4);
oneQ84.addRating(5); 
oneQ84.addRating(5);
console.log(`${oneQ84.title} номын үнэлгээ : ${oneQ84.getAverageRating()} `);



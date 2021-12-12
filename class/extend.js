// Book
// gishuun ogogdol:author,title,pages,ratings;
// getter argiig bvh gishuun ogogdold bichne.
// gishuun vildel getAverageRatings().addRating();

// Movie
// gishuun ogogdol:director,title,runtime,ratings;
// getter argiig bvh gishuun ogogdold bichne.
// gishuun vildel getAverageRatings().addRating();
// alham1: Deerh 2 bvtetsiig negtgeh Media etseg classiig vvsgene
class Media{
    constructor(title){
        this._title = title;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get ratings(){
        return this._ratings;
    }
    getAverageRating(){
        let sum = this.ratings.reduce((currentSum,rating) => currentSum + rating,0);
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
        return this.pages;
    }
}
class Movie extends Media{
    constructor(director,title,runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}
let oneQ84 = new Book('Мүраками Харүки ', '1Q84 I ', 409);
oneQ84.addRating(4);
oneQ84.addRating(5);
oneQ84.addRating(5);
console.log(`${oneQ84.title} номын үнэлгээ : ${oneQ84.getAverageRating()}`);
let coco = new Movie('Lee Unkrich ', 'Coco ' , 109);
coco.addRating(1);
coco.addRating(1);
coco.addRating(5);
console.log(`${coco.title} киноны үнэлгээ: ${coco.getAverageRating()}`);
// alham2: Media class dotor neg parametr bvhii baiguulagch function-g zarlana parametr ner title baina
// alham3: Baiguulagch function dotor _title gishvvn ogogdold title utgiig hadgalah ba _ratings nertei hooson massiv vvsgene
// alham4: title .ratings nertei getter arguudiig bichne
// alham5: baiguulagch function dotor getAverageRating nertei function-g bichne ug function n _ratings massiviin elmentvvdiin dundjiig olj butsaah ystoi Massiviin elementvvdiin niilberiig reduce function ashiglan oconsole.log();
// alham6: Mon addRating() nertei function-g neg parametertei zarlana ug function n _ratings massivd push() argaar utgiig nemne 
// alham7: Odoo media classaas udamshsan Book classiig vvsgene
// alham8: Book class dotor baiguulagch function
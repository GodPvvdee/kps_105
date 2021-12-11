const bag = {
    _toglogchid:[
        {ner:"name1",nas:23},
        {ner:"name2",nas:22},
        {ner:"name3",nas:25}
    ],
    _toglolt:[
        {ursuldugch:"TeamB", bagOnoo:90, ursuldugchOnoo:89},
        {ursuldugch:"TeamC", bagOnoo:70,ursuldugchOnoo:90},
    ],
    get toglolt() {
        return this._toglolt;
    },
    get toglogchid() {
        return this._toglogchid;
    },
    addToglogchid(ner,nas){
        let toglogchid = {
            ner:ner,
            nas:nas
        };
        this._toglogchid.push(toglogchid);
    },
    addToglolt(urs,bOnoo,ursOnoo) {
        let toglolt = {
            ursuldugch :urs,
            bagOnoo:bOnoo,
            ursuldugchOnoo:ursONoo
        };
        this.toglolt.push(toglolt);
    }
};
bag.addToglogchid("pvvdee",55);
bag.addToglogchid("azaa",54);
console.log(bag.toglogchid);
bag.addToglolt("Teamz",88,89);
console.log(bag.toglolt);
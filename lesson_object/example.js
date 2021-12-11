// alham1: bid sportiin togloltod oroltsdog bagiig zagvar gargah ystoi tul hamgiin ehleed bag nertei const object vvsgene
const bag = {
    _toglogchid:[
        {ner:'Нямка', nas:21},
        {ner:'Азаа', nas:25},
        {ner:'Улаанаа', nas:22}
    ],
    _toglolt:[
        {ursuldugch:'Хажидмаа', bagOnoo:90, ursuldugchOnoo:89},
        {ursuldugch:'Пүүдж', bagOnoo:80, ursuldugchOnoo:90}
    ],
    get toglolt(){
        return this._toglolt;
    },
    get toglogchid(){
        return this._toglogchid;
    },
    addToglogch(ner,nas){
            let toglogchid = {
                ner:ner,
                nas:nas
            };
            this._toglogchid.push(toglogchid);
    },
    addToglolt(urs,bOnoo,ursOnoo){
            let toglolt = {
                ursuldugch:urs,
                bagOnoo:bOnoo,
                ursuldugchOnoo:ursOnoo
            };
            this._toglolt.push(toglolt);
    }
};
bag.addToglogch("toglogch1",30);
bag.addToglogch("toglogch2",31);
console.log( bag.toglogchid);
bag.addToglolt("Teama",89,90);
console.log( bag.toglolt);
// alham2: bag n toglogch bolon togloltiin medeelliig hadgalah tul bag object dotor _toglogchid, _toglolt nertei hooson massiviig gishuun ogogdloor zarlana
// alham3: odoo _toglogchid nertei massiv dotor daraah zagvariin daguu 3 toglogchiin medeelliig nemne Toglogchiin ner bolon nasiig oorsdoo zohioj olgooroi
// {ner:'Тоглогчийн нэр', nas:25}
// alham4: mon _toglolt nertei massiv dotor 2 toglogchiin medeelliig daraah zagvariin daguu Nemne .Togloson orsoldogch basiin ner, ooriin bagiin onorientationchange, orsoldogchin onoog oorsdoo zohioj ogooroi.Nemne
// {ursuldugch:'Өрсөлдөгийн нэр', bagOnoo:10, ursuldugchOnoo:20}
// alham5: _toglogchid,_toglolt-n utgiig butsaah getter arguudiig bich
// alham6 : Odoo bagtaa shine toglolgch nemeh addToglogch nertei funtion Nemne 
// funtion-g 2 parametrtei zarlah ba toglogchin ner nas baina
// alham7: 6 dahe alhamd bichsen funtion-g ashiglaad 2 toglogch nemne.Tvvnii daraa toglogchid massiviin utgiig get argaar avch console deer hewlene
// alham8: Bagt shine toglolt nemeh addToglolt nertei function nemne. Function-g 3 parametrtei zarlah ba orsoldogch bagiin ner, bagiin onoo ,orsoldogch bagiin onoo baina
// alham9: 8 dahe alhamd bichsen function-g ashiglaad neg togloltiin medeelel nemne Tvvnii daraa toglolt massiviin utgiig get argaar avch console deer hewlene
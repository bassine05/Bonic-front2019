export class Addregistrar {
    id: number;
    name : string;
    mail : string;
    phone : string;
    fax : string;
    adresse : string;
    url : string;
    NINEA : string;
    GURID : string;
    IDEXTERNE : string;
    city_id : number;
    country : string;

    constructor (name,mail, phone,fax,adresse,url, NINEA, GURID, IDEXTERNE, country, city_id){
        this.name=name;
        this.mail=mail;
        this.phone=phone;
        this.fax=fax;
        this.adresse=adresse;
        this.url=url;
        this.NINEA=NINEA;
        this.GURID=GURID;
        this.IDEXTERNE=IDEXTERNE;
        this.city_id=city_id;
        this.country=country;
    }
}
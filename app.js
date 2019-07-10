var aff = console.log;
let favoriteCityId = 'rome';
aff(favoriteCityId);
favoriteCityId = 'paris';
aff(favoriteCityId);

// CONST
const citiesId = new Array("paris", "nyc", "rome", "rio-de-janeiro");
//citiesId.nom = "paris", "nyc", "rome", "rio-de-janeiro";
aff(citiesId);
//citiesId = [];
citiesId.push('tokyo');
aff(citiesId);

// Creation d'objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

aff(getWeather('paris'));

const weather = getWeather(favoriteCityId);
aff(weather);

// AFFECTATION DESTRUCTURée
const {
    city,
    temperature
} = weather;

aff(city);
aff(temperature);

// REST OPERATOR

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);

// CLASSE

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    get price() {
        return this._price;
    }
    set price(newprice) {
        return this._price = newprice;
    }

    toString() {
        return "TRIP [ " + this.id + ' ' + this.name + '  ' + this.imageUrl + ' ' + this._price + ' ]';


    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}


let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
aff(parisTrip.toString())
aff(parisTrip.name);

parisTrip.price = 100;
aff(parisTrip);
const defaultTrip = Trip.getDefaultTrip();
aff(defaultTrip.toString());

// HERITAGE

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }
    toString() {
        return 'FREE' + super.toString();
    }


}
const freeTrip = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
aff(freeTrip.toString());
const freetrip1 = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
aff(freetrip1.toString());

// Promise, Set, Map, Arrow Function

class TripService {

    constructor() {
        // TODO Set of 3 trips
        let t1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        let t2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        let t3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

        this.trips = new Set();
        this.trips.add(t1);
       this.trips.add(t2);
       this.trips.add(t3);
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                for (const trip of this.trips) {
                    
                    if(trip.name === tripName) {
                        resolve(trip);
                    }// gestion des erreurs
                }

                reject('No trip with name' + tripName );

                
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                
                
    Pour simuler une récupération des données distantes, utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s.
    Renvoyer l'objet Trip correspondant au nom du voyage en paramètre.
    Si aucun voyage ne correspond au nom en paramètre, renvoyer une erreur No trip with name xxx.



            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        let t1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        let t2 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

        // créer
        let trips = new Map();

        // alimenter
        trips.set('rio-de-janeiro', 800);
        trips.set('paris', 100);

        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}

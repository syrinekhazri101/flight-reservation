export class Vol {
  constructor(
    public id: number,
    public image:string,
    public compagnie: string,
    public numeroVol: string,
    public villeDepart: number,
    public aeroportDepart: string,
    public dateDepart: string,
    public heureDepart: string,
    public villeDestination:string,
    public aeroportDestination: string,
    public dateArrivee:string,
    public heureArrivee:string,
    public duree:string,
    public prix:number,
    public classe:string[],
    public placesDisponibles:number,
    public reduction:number

) { }
}

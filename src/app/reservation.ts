export class Reservation {
  constructor(
    public id:number,
    public passager_id :number ,
    public vol_id:number,
    public 	dateReservation: Date,
    public villeDestination: string,
    public montant: number,
    public classe: string,
    public status: string
  ){}
}
